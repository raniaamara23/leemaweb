import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  
    return (
        <>
        <nav className="navbar navbar-expand-lg sticky-top back shadow-sm cont  ">
  <div className="container   ">
  <a className="navbar-brand " href="#">
          <Image
            src= '/images/leema.svg'
            alt="Logo"
            height="30"
            width="200"
                className="position-relative top-50 start-50 mt-5 translate-middle "
               
              
          />
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mt-4 nav-underline custom custom-hover-effect ">
        <li className="nav-item">
          <a className="nav-link  aa"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ab" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ac" href="/services">Services</a>
                </li>
                <li className="nav-item">
          <a className="nav-link ad" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
          <a className="nav-link ae" href="/blog">Blog</a>
                </li>
                <li className="nav-item">
          <a className="nav-link af" href="/portfolio">Portfolio</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        
        </>
  )  


}
export default Navbar