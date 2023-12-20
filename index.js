import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

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
    console.log(userPosts);
    res.redirect("/");
});

// Update the selected post
app.put("/update/:id", (req, res) => {
    console.log("It worked...");
});

// Delete the selected post
app.delete("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    userPosts = userPosts.filter(post => post.id !== postId);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
