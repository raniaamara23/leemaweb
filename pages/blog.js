import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
    return (<>
        
        <Navbar/>
        <main className="container">
    <div className="p-4 p-md-5  rounded text-body-emphasis pr">
    <div className="col-lg-6 px-0">
      <h1 className="display-6 fst-italic "> Demystifying Web Development: From HTML to Full-Stack</h1>
    
      <p className="lead a1 mb-0 "><a href="https://developer.ibm.com/technologies/web-development/articles/" className=" fw-bold ">Continue reading...</a></p>
    </div>
    </div>
           
    <div className="row mb-2">
    <div className="col-md-4">
    <div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda ">Building Apps With Vite</h5>
    <h6 className="card-subtitle mb-2 cardr">Learn how to build a web app using Vite now for more efficiency</h6>
    
    <a href="https://www.codecademy.com/article/building-apps-with-vite" class="card-link"> <Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" />
        </a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Building Projects with VS Code</h5>
    <h6 className="card-subtitle mb-2 cardr ">Use Visual Studio Code in your local environment and create an HTML website!</h6>
    
    <a href="https://www.codecademy.com/article/building-projects-with-vs-code" className="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Bootstrap</h5>
    <h6 className="card-subtitle mb-2 cardr"> we'll use Bootstrap to implement these  common website features</h6>
    
    <a href="https://www.codecademy.com/article/bootstrap-menus-navbar-modals" className="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>           
</div>

<div className="row mb-2">
    <div className="col-md-4">
    <div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Build a 3D Environment with Three.js</h5>
    <h6 className="card-subtitle mb-2 cardr ">Step-by-step tutorial about how to build a 3D environment </h6>
    
    <a href="https://www.codecademy.com/article/brandondusch/build-a-3d-environment-with-three-js" className="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Creating a Website on GitHub Pages</h5>
    <h6 className="card-subtitle mb-2 cardr ">Put your work online using GitHub Pages – no command line required!</h6>
    
    <a href="https://www.codecademy.com/article/creating-a-website-on-github-pages" className="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Data Structure APIs</h5>
    <h6 className="card-subtitle mb-2 cardr">A brief overview of APIs as they relate to JavaScript data structures.</h6>
    
    <a href="https://www.codecademy.com/article/data-structure-apis-js" class="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>           
</div>
<div className="row mb-2">
    <div className="col-md-4">
    <div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Database Scaling Strategies</h5>
    <h6 className="card-subtitle mb-2 cardr ">Learn about two strategies to help scale a database.</h6>
    
    <a href="https://www.codecademy.com/article/database-scaling-strategies" className="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div className="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Developing dynamic Web sites</h5>
    <h6 className="card-subtitle cardr mb-2 ">Use the MVC framework with CRUD for more efficiency and speed</h6>
    
    <a href="https://developer.ibm.com/articles/os-codeigniter/" class="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>
<div className="col-md-4">       
<div class="card cardi" >
  <div className="card-body">
    <h5 className="card-title carda">Deploying a Flask App</h5>
    <h6 className="card-subtitle mb-2 cardr">Learn how to deploy your own Flask application with Heroku.</h6>
    
    <a href="https://www.codecademy.com/article/deploying-a-flask-app" class="card-link"><Image src='/images/arrow-right.svg' className="bi" alt="Bootstrap" width="32" height="32" /></a>
    
  </div>
</div>
</div>           
</div>  






       
        </main>
        
 
        <Footer/>
    </>)
}
export default Blog