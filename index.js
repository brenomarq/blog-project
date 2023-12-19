import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const userPosts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

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

// Methods associated with posts
app.post("/create", (req, res) => {
    const createdPost = req.body;
    userPosts.push(createdPost);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
