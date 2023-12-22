import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import { render } from "ejs";

const app = express();
const port = 3000;
let userPosts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// Pages routes
app.get("/", (req, res) => {
    res.render("home.ejs", {listedPosts: userPosts});
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Create the post
app.post("/create", (req, res) => {
    const { title, author, content} = req.body;
    const newPost = {
        id: userPosts.length+1, title, author, content
    };
    userPosts.push(newPost);
    res.redirect("/");
});

// Update the selected post
app.get("/update/:id", (req, res) => {
    console.log("Where's the problem?");
    const postId = parseInt(req.params.id);
    const post = userPosts.find(post => post.id === postId);
    res.render("update.ejs", { post });
});

app.put("/update/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, author, content} = req.body;
    const postIndex = userPosts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        userPosts[postIndex] = {
            id: postId, title, author, content
        }
    }
    res.redirect("/");
});

// Delete the selected post
app.get("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = userPosts.find(post => post.id === postId);
    res.render("delete.ejs", { post })
});

app.delete("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    userPosts = userPosts.filter(post => post.id !== postId);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
