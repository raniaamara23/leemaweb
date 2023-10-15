import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
const Indexpage = () => {
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
    const threshold = viewportHeight * 0.7; // Adjust as needed

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
    <Navbar/>
    <div className="container px-4  containerr">
  <div className="row ">
    <div className="col-sm-6 col-md-6 ">
     <div className="p item-fliud ">
    <h1 className="h11 "> 
EMPOWER 
   </h1>
    <h2 className="h22"> YOUR DIGITAL PRESENCE </h2>
    <h3 className="h33 "> Welcome to <div className="tt "> leema webtech </div>   where innovation meets expertise in website and web application development.</h3>
   </div>
    </div>
    <div className="col-sm-6 col-md-6 ">
            <div className="p">
            <Image
            src= '/images/im1.svg'
            alt="Logo"
            height="400"
                width="500"
                className="img-fluid  image animate__animated animate__slideInRight"
          
          />
            </div>
    </div>
  </div>
      </div>
      <div className="bttn bttn-hover "> <a className=" btn btn-lg animate__animated animate__slideInLeft " href="/pages/contact.js" role="button">Contact Us!</a></div>

      <div className="container-fluid px-4 py-5 mt-5 zoom-element " id="hanging-icons">
    <h2 className="pb-2 border-bottom border-1 text-center fs-2 "> Why Choose Us ?</h2>
    <div className="row  mt-5  g-5  row-cols-1 row-cols-lg-4">
      <div className="col d-flex align-items-start ">
        <div className="icon">
              <Image src='/images/lightbulb.svg' className="bi  " alt="Bootstrap" width="32" height="32" />
        </div>
        <div>
          <h3 className="fs-3 text-body-emphasis"> Solutions</h3>
          <p className="mb-4">Our web development services are custom-tailored to suit your unique needs and objectives. </p>
          <div className="bton bton-hover mt-auto"><a href="#" className="btn btn-md ">
          learn more
          </a></div>
        </div>
      </div>
      <div className="col d-flex align-items-start ">
        <div className="icon">
        <Image src='/images/code.svg' className="bi" alt="Bootstrap" width="32" height="32" />
        </div>
        <div>
          <h3 className="fs-3 text-body-emphasis">Technology</h3>
          <p className="mb-4">Our team continuously explores new tools and techniques to ensure your online presence stays future-proof.</p>
          <div className="bton bton-hover mt-auto"><a href="#" className="btn btn-md">
          learn more
          </a></div>
        </div>
      </div>
      <div className="col d-flex align-items-start ">
        <div className="icon">
        <Image src='/images/arrow.svg' className="bi" alt="Bootstrap" width="32" height="32" />
        </div>
        <div>
          <h3 className="fs-3 text-body-emphasis">Performance</h3>
          <p className="mb-4">We build robust websites and web applications that can handle your growing business demands.</p>
          <div className="bton bton-hover mt-auto"><a href="#" className="btn btn-md">
          learn more
          </a></div>
            </div>   
          </div>
          <div className="col d-flex align-items-start ">
            <div className="icon">
        <Image src='/images/brush.svg' className="bi" alt="Bootstrap" width="32" height="32" />
        </div>
        <div >
          <h3 className="fs-3 text-body-emphasis">Design</h3>
          <p className="mb-4">Our designs are not only visually stunning but also intuitive, ensuring a seamless user experience.</p>
           <div className="bton bton-hover mt-auto"><a href="#" className="btn btn-md">
          learn more
          </a></div>
            </div>   
          </div>
          
    </div>
  </div>
     
  <div class="container-fluid px-4 py-5 mt-5 zoom-element ">
    <a></a><h2 class="pb-2 border-bottom fs-2 ">Our Services</h2>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold text-body-emphasis">Transforming Ideas into Stunning Digital Experiences</h2>
        <p class="text-body-secondary">Our services is dedicated to turn your concepts into visually captivating and functional digital platforms. Whether you're a startup, a growing business, or an established brand, we create websites and applications  that leave a lasting impression and resonate with your target audience..</p>
        <div className="bat bat-hover"><a href="/services" class="btn  btn-lg">See More</a></div>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis h44 h44-hover"><a href="/" >Web Design</a></h4>
            <p class="text-body-secondary"> striking designs that leave a lasting impression.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis h44 h44-hover"><a href="/">Mobile Responsiveness</a></h4>
            <p class="text-body-secondary"> Reach your audience on any device with responsive websites and applications .</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis h44 h44-hover"><a href="/">Web Development </a></h4>
            <p class="text-body-secondary"> our developers thrive on turning complex ideas into functional realities.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis h44 h44-hover"><a href="/" >Web Applications</a></h4>
            <p class="text-body-secondary">Empower your business with powerfull web applications .</p>
          </div>
        </div>
          </div> 
          </div>
      </div> 
     <Footer/>
      
    </>
  );
};
export default Indexpage;