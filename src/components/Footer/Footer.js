import React from 'react'
import './Footer.css'
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
   return (
      <div className='footer'>
         <div className='footer-logo'>JWR</div>
         <div className='worker-container'>
            <div className='woker-info'>
               <p className='woker-name'>Поліщук Віталій</p>
               <div className='worker-link'> 
                  <div className='link-icon'>
                     <FaPhoneAlt/>
                  </div>
                  <div className='link-info'>
                   <a className='tel' href="tel: +380971279385">+38(097)1279385</a>
                  </div>
               </div>              
            </div>
            <div className='woker-info'>
               <p className='woker-name'>Ромасюн Віталій</p>
               <div className='worker-link'> 
                  <div className='link-icon'>
                     <FaPhoneAlt/>
                  </div>
                  <div className='link-info'>
                   <a className='tel' href="tel: +380636330287">+38(063)6330287</a>
                  </div>
               </div>              
            </div>
         </div>
         
      </div>
    
   )
}
export default Footer;
