//require npm modules: express module & morgan module
const express = require('express');
const morgan = require('morgan');

//create an express app
const app = express();

//set up our view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//set up our static files
app.use(express.static(`${__dirname}/public`));

//logging middleware
app.use( morgan('dev') );

app.get('/', (req, res) => {
  res.status(200).render('index', { heading: 'Welcome to my portfolio' });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', { heading: 'Who am I?' });
});

app.get('/contact', (req, res) => {
  res.status(200).render('contact', { heading: 'Contact me !' });
});

app.get('/project1', (req, res) => {
  res.status(200).render('project1', { heading: 'Super Mario Bros - Memory Game' });
});

app.get('/project-coming-soon', (req, res) => {
  res.status(200).render('project-coming-soon', { heading: 'Project Coming Soon !' });
});

app.get('*', (req, res) => {
  res.status(404).render('404', { heading: '404: File Not Found !' });
});

//listen to traffic on localhost:3000
app.listen(3000, () => console.log('Express is listening...'));
