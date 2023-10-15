import Link from "next/link"
import Image from "next/image"
const Footer = () => { 
    return (
        <>
    <div className="container-fluid conc ">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 bb bb-h">
      <li className="nav-item "><a href="/"className="nav-link px-2 ">HOME</a></li>
      <li className="nav-item"><a href="/about"className="nav-link px-2 ">ABOUT</a></li>
      <li className="nav-item"><a href="/contact"className="nav-link px-2 ">CONTACT</a></li>
      <li className="nav-item"><a href="services"className="nav-link px-2 ">SERVICES</a></li>
     <li className="nav-item"><a href="/blog"className="nav-link px-2 ">BLOG</a></li>
     <li className="nav-item"><a href="/portfolio"className="nav-link px-2 ">PORTFOLIO</a></li>
    </ul>
    <p className="text-center  te"> 2023 Leema webtech  .All Rights Reserved</p>
  </footer>
</div>
        
        
        
        
        
        </>   
    )
}
export default Footer