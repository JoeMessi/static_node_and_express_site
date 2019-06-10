// require express
const express = require('express');
// starts an express apllication
const app = express();
// require data.json
const data = require('./data.json');
// seting view engine to pug
app.set('view engine', 'pug');
// serving static files inside public folder
app.use('/static', express.static('public'));

// 'home' page route
app.get('/', (req, res) => {
  res.render('index.pug', {projects: data.projects});
});

// 'about' page route
app.get('/about', (req, res) => {
  res.render('about.pug');
})

// 'projects' page route ( dynamic depending on the project id )
app.get('/project-:id', (req, res, next) => {
  // project id given in the url
  const { id } = req.params;
  // specific project data given an id
  const project = data.projects[id];

  // if valid project and id, render the project page
  if(project) {
    res.render('project.pug', { project });

  }else{ // else throw an error

    const err = new Error('whoops! Page Not found');
    err.status = 404;
    console.log(`${err} - status code of: ${err.status}`)
    next(err);
  }
})

// error handler middlewares
app.use((req, res, next) => {
  const err = new Error('whoops! Page Not found');
  err.status = 404;
  // log err message
  console.log(`${err} - status code of: ${err.status}`)
  next(err);
})
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error.pug');
})

// local server set up, port number 3000
app.listen(3000, () => {
  console.log('the application is running on localhost:3000!');
});
