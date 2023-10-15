import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
    return (
        <>
            <Navbar />  
             

 <div className="containerd-flex align-items-center  conti">
  <div className="row gx-5">
    <div className="col  ">
     <div className="p-3  imag "> <Image
            src= '/images/contact.svg'
            alt="Logo"
            height="400"
                width="500"
                className="img-fluid animate__animated animate__slideInLeft"
          
          /></div>
    </div>
    <div className="col">
    <div className="p-3">
    <main className="form-signin w-100 m-auto  fom">
    <form>
    
    <h1 className="h3 mb-3 fw-normal mb-4">Contact Us Now !</h1>

    <div className="form-floating">
      <input type="email" className="form-control mb-3" id="floatingInput" placeholder="name@example.com"/>
      <label  for="floatingInput"> Email address</label>
    </div>
    <div className="form-floating">
      <input type="paragraph" className="form-control mb-3" id="floatingPassword" placeholder="paragraph"/>
  
    <label for="floatingInput">Your Name</label>
    </div>

    <div className="form-floating">
      <input type="" className="form-control mb-3" id="exampleFormControlTextarea1" placeholder="exampleFormControlTextarea1"/>
  
    <label for="floatingInput">Message</label>
    </div>
    <div className="bt bt-h">
    <button className="btn  w-100 py-2" herf='/'type="submit">Submit</button>
    </div>
  </form>
</main></div>
    </div>
  </div>
</div>

            <Footer/>
        </>
    )
}
 export default Contact