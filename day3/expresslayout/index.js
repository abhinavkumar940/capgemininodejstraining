const express = require('express');
const mustacheExpress = require('mustache-express');

const posts = [
    {
        id: 1,
        title: "My first blog post",
        content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        headerImage: "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg",
        author: "Edward",
        date: "12-12-2018 12:19 PM",
    },
    {
        id: 2,
        title: "My second blog post",
        content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        headerImage: "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg",
        author: "Edward",
        date: "12-11-2018 12:19 PM",
    },
    {
        id: 3,
        title: "My third blog post",
        content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        headerImage: "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/post-bg.jpg",
        author: "Edward",
        date: "12-10-2018 12:19 PM",
    }
];

const app = express();

app.use(express.static(__dirname + "/public"));

app.engine('html', mustacheExpress());

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.set("layout", "layouts/layout");

app.get("/", (req, res) => {
    // res.render('hello.html', { title: 'my other page' });

    res.render('home.html', { posts: posts});
});

app.get("/about", (req, res) => {
    res.render('about.html');
});

app.listen(3000, () => {
    console.log('server started');
})