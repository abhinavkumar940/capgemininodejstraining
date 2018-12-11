const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

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
})
   
  app.listen(3000, () => {
      console.log('Server listening');
  });