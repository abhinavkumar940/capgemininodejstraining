const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/auth", (req, res) => {
    const authPage = require('./pages/auth');

    res.send(authPage.html);
});

app.post("/auth", (req, res) => {
    const email = req.body.email;

    const password = req.body.password;

    if (email === "abhinav@gmail.com"  && password === "rightpassword") {
        res.redirect("/");
    } else {
        res.redirect("/auth");
    }
});

app.get('/', (req, res) => {
    const homePage = require('./pages/home');

    res.send(homePage.html);
});

app.get('/about', (req, res) => {
    const aboutPage = require('./pages/about');

    res.send(aboutPage.html);
});

app.get('/contact', (req, res) => {
    const contactPage = require('./pages/contact');

    res.send(contactPage.html);
});


app.post("/contact", (req, res) => {
    console.log(req.body);
})
   
  app.listen(3000, () => {
      console.log('Server listening');
  });