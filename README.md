# static_node_and_express_site

To use this app:

1) download the project file.

2) open up the terminal and type: 'npm install'
   this will install all the required dependencies

3) then type 'npm start' to start the application,
   open up your favourite browser and go to 'http://localhost:3000/'




for the reviewer of this project:

I'm going for Exceed Expectations and these are some of the CSS I added/changed in the style.css provided for the project:

// this is for the profile image .thumbnail
.shrink .thumbnail {
  border: none;
  box-shadow: none;
}

// this is for the projects images .thumbnail
.cell a .thumbnail {
  border: none;
  box-shadow: none;
  transition: .6s ease;
  border-radius: 5px;
  box-shadow: 0px 0px 1px #0000007d;
}

// hover effects on the projects images .thumbnail
.cell:hover a .thumbnail {
  opacity: 0.6;
  box-shadow: 0px 0px 6px #000000d6;
}

// h5 inside the project .cell
.cell a h5 {
  transition: .6s ease;
}
// hover effects on the h5 inside the project .cell
.cell:hover a h5 {
  color: #3c3b3b;
  font-size: 1.4rem;
}

body {
  background-color: #e8e8e873;
}
// some padding on the div that contains the html element I show in the error page
.errorDiv {
  padding: 3rem;
}
