import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
    return (<>
        
        <Navbar/>

        <main>

<section className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light mb-3 ">Welcome to our portfolio! </h1>
      <p className="lead text-body-secondary mb-3"> We are thrilled to share our journey and showcase the projects that reflect our passion for creativity and innovation. With a focus on web development and design, we've had the privilege of crafting digital experiences that seamlessly blend functionality and aesthetics..</p>
      <p className="f">
        <a href="/contact" className="btn btn-primary my-2">contact Us Now</a>
      
      </p>
    </div>
  </div>
</section>

<div className="album py-5 ">
  <div className="container">

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div className="col">
        <div className="card cardd ">
          <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/6.webp"/>
          <div className="card-body">
            <p className="card-text">org website </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/8.jpg"/>
          <div className="card-body">
            <p className="card-text">Pesto website.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/9.webp"/>
          <div className="card-body">
            <p className="card-text">Herber website.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/10.jpg"/>
          <div className="card-body">
            <p className="card-text">chickpea application.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/11.webp"/>
          <div className="card-body">
            <p className="card-text">Food application.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/12.png"/>
          <div className="card-body">
            <p className="card-text">Foodx application</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className=" card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/13.jpg"/>
          <div className="card-body">
            <p className="card-text">Waxom website.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/14.jpg"/>
          <div className="card-body">
            <p className="card-text">Pixel website.</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" card cardd ">
        <Image width="300" height="225" className="bd-placeholder-img card-img-top" src="/images/15.jpg"/>
          <div className="card-body">
            <p className="card-text">classimax website</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary ms-4">View</button>
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>

        <Footer/>
    </>)
}
export default Portfolio