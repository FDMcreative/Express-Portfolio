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

//add some middleware
// app.all('*', (req, res, next) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain'});
//   next();
// });

app.get('/', (req, res) => {
  res.status(200).render('index', { heading: 'welcome to the homepage' });
});

app.get('/about', (req, res) => {
  res.status(200).render('index', { heading: 'welcome to the about page' });
});

app.get('*', (req, res) => {
  res.status(404).render('index', { heading: '404: file not found' });
});

//listen to traffic on localhost:3000
app.listen(3000, () => console.log('Express is listening...'));
