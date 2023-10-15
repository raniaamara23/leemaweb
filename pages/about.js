import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const Elements = document.querySelectorAll('.zoom-element');
    const zoomOut = (Element) => {
      Element.classList.remove('animate__zoomIn');
      Element.classList.add('animate__animated', 'animate__zoomOut');
    };
    const zoomIn = (Element) => {
      Element.classList.remove('animate__zoomOut');
      Element.classList.add('animate__animated', 'animate__zoomIn');
     
    };

   

    const handleScroll = () => {
      Elements.forEach((Element) => {
        const rect = Element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
       // Calculate the middle of the viewport
    const viewportMiddle = viewportHeight / 2;

    // Calculate the middle of the element
    const elementMiddle = (rect.top + rect.bottom) / 2;

    // Calculate the threshold for considering the element in the middle
    const threshold = viewportHeight * 0.5; // Adjust as needed

    // Check if the element middle is close to the viewport middle within the threshold
    const isElementInMiddle = Math.abs(elementMiddle - viewportMiddle) < threshold;

    if (isElementInMiddle) {
        const isScrollingDown = elementMiddle > viewportMiddle;
          
          if (isScrollingDown) {
          
            zoomIn(Element);
          } else {
            zoomOut(Element)
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  
    return (
      <>
      
        <Navbar />
        <div className="contn">
      <div className="row featurette pd zoom-element ">
      <div className="col-md-7 mt-5  ">
        <h2 className="featurette-heading  fs-1  n n-b slide-text "><a>Our Story</a></h2>
        <p className="lead p11 ">LeemaWebTech is a new company that was created in 2020, as an independent company, specialized in the IT field. Since its creation, it has worked for various clients and partners in Tunisia and internationally.</p>
      </div>
      <div className="col-md-5 ">
        <Image  className="  im11  " src="/images/ab1.svg" height="500" width="500" alt="Bootstrap"/>  
      </div>
    </div>

    <hr className="featurette-divider"></hr>

    <div className="row featurette pd zoom-element ">
      <div className="col-md-7 order-md-2  mt-5  ">
        <h2 className="featurette-heading fs-1 pp n n-b "  ><a>Our Mission</a></h2>
              <p className="lead p12 ">Our company specializing in IT development and services. It is used to find effective and efficient software solutions to meet the needs of its customers.Among the company's on-site activities:<br/>
                • Project design and implementation.<br/>
                • Development of Websites and Web applications for foreign <br/>companies.<br/>
                • Information Systems.</p>
      </div>
      <div className="col-md-5  mt-3">
        <Image  className="  im11 mt-1 " src="/images/ab2.svg" height="500" width="500" alt="Bootstrap"/>  
      </div>
    </div>

          <hr className="featurette-divider"></hr>
          <div className="row featurette pd zoom-element ">
          <h2 className="featurette-heading  mb-5 fs-1  n n-b"><a>Leadership</a></h2>
      <div className="col-lg-6 col-sm-12 ">
      <Image className="bd-placeholder-img rounded-circle img-fluid ms-5 "  src=" /images/ab3.svg"width="140" height="140" />
        <h2 className="fw-normal mt-3">  Aymen Abdesselem</h2>
        <p className="ms-5">The Company Manager</p>
        <p><a className="btn btn-secondary ms-5 mt-3" href="#">View details &raquo;</a></p>
      </div>
            <div className="col-lg-6 col-sm-12 ">
              
        <Image className="bd-placeholder-img rounded-circle  img-fluid  ms-5" src="/images/ab4.svg" width="140" height="140" />
        <h2 className="fw-normal mt-3 "> Marwen Abdesselem</h2>
        <p className="ms-5">The assistant manager</p>
        <p><a class="btn btn-secondary ms-5 mt-3" href="#">View details &raquo;</a></p>
      </div>
      
          </div>
          <div style={{ height: '50vh' }}></div>
    </div>
      
        


      <Footer/>
      
      </>
    )
  }
  export default About