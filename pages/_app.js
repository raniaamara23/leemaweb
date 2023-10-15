import "../styles/nav.scss"; // Import your global styles
import "../styles/index.scss"; 
import "../styles/foot.scss"; 
import "../styles/contact.scss"; 
import "../styles/about.scss"; 
import "../styles/service.scss";
import "../styles/blog.scss";
import "../styles/portfolio.scss";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; 


import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
 
  return <Component {...pageProps} />;
}