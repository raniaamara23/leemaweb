import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
const Service = () => {
  useEffect(() => {
    const Elements = document.querySelectorAll('.zoom');
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
    return (<>
        
        <Navbar/>

      <nav id="navbar-example2" className="  navbar mt-5 px-3 mb-3 ">
        
     <div className="row">
  <ul className="nav justify-content-center col-12  ser ss">
    <li className="nav-item col-3 ">
      <a className="nav-link" href="#scrollspyHeading1">Web Design</a>
    </li>
    <li className="nav-item  col-3">
      <a className="nav-link" href="#scrollspyHeading2">Web Development</a>
     </li>
        <li className="nav-item col-3 ">
      <a className="nav-link" href="#scrollspyHeading3">Mobile Responsiveness</a>
    </li>
      <li className="nav-item col-3">
      <a className="nav-link" href="#scrollspyHeading4">Web Applications</a>
    </li>    
   
          </ul>
          </div>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example  p-3 rounded-2" tabindex="0">
            <h4 id="scrollspyHeading1 " className=" h44a fs-1  ">Web Design</h4>
            <div className="containe row zoom">
              <div className="col-md-6 " >
            <Image
            src= '/images/2.jpeg'
            alt="Logo"
            height="300"
                width="400"
                className="img "/></div>  
 <div className="col-md-6  col-sm-12 "> <p className=" pi text-fluid   ">At Leema WebTech, we are more than designers ,we're creators of digital experiences that captivate, inspire, and engage. As a web design startup, we understand the power of aesthetics and user-centered design. Our team of skilled designers possesses a keen eye for detail and a deep understanding of design principles. We take the time to delve into your brand's essence, crafting unique and visually stunning web interfaces that seamlessly blend form and function. Our goal is to not only make your website visually appealing, but also to create an intuitive and immersive user journey.
</p></div></div> 
            <h4 id="scrollspyHeading2" className="fs-1 h44a ">Web Development</h4>
            <div className="containe row zoom">
            <div className="col-md-6"> <p className="pi text-fluid ">At Leema WebTech, we are a dynamic and innovative web development startup dedicated to bringing your digital visions to life. With a passion for code and a commitment to excellence, we embark on a journey to craft exceptional online experiences. Our team of talented developers thrives on challenges, translating ideas into functional and visually captivating websites. We specialize in tailoring solutions that cater to the unique needs of businesses across various industries. Whether you're a small business looking for a professional online presence or a larger enterprise in need of a robust web application, we combine creativity, technical expertise, and a customer-centric approach to deliver results that exceed expectations.</p></div> 
            <div className="col-md-6">  <Image
            src= '/images/3.jpeg'
            alt="Logo"
            height="300"
            width="400"
                className="img "/>
             </div> 

            </div>
            <h4 id="scrollspyHeading3" className="fs-1  h44a ">Mobile Responsiveness</h4>
            <div className="containe row zoom">
            <div className="col-md-6">  <Image
            src= '/images/1.jpeg'
            alt="Logo"
            height="300"
                width="400"
                className="img  "/></div>
                <div className="col-md-6"> <p className="pi text-fluid ">At Leema WebTech, we recognize that the mobile experience is at the forefront of digital engagement. As a startup focused on mobile responsiveness, we're dedicated to ensuring that your website looks and functions flawlessly across all devices. With the majority of online interactions occurring on smartphones and tablets, our team of experts meticulously crafts designs that adapt seamlessly to varying screen sizes and orientations. We employ a mobile-first approach, prioritizing the user experience on smaller screens while maintaining the integrity of your brand and content. </p>  </div> 
            </div>
            <h4 id="scrollspyHeading4" className="fs-1  h44a ">Web Applications</h4>
            <div className="containe row zoom">
            <div className="col-md-6"> <p className="pi text-fluid ">At Leema WebTech, we're passionate about pushing the boundaries of online capabilities through innovative web applications. As a dedicated web application startup, we harness the power of technology to transform your ideas into fully functional and dynamic digital solutions. Our team of skilled developers and architects thrive on crafting bespoke web applications that cater to your specific business needs. Whether you're envisioning an e-commerce platform that streamlines transactions, a customer portal that enhances engagement, or a data-driven solution that empowers your decision-making, we're here to build it.</p></div> 
            <div className="col-md-6"> <Image
            src= '/images/4.jpg'
            alt="Logo"
            height="300"
            width="400"
                className="img "/></div> 
</div></div>
        <Footer/>
    </>)
}
export default Service