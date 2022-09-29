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
                   <a className='tel' href="tel: +380967774389">+38(096)7774389</a>
                  </div>
               </div>              
            </div>
            <div className='woker-info'>
               <p className='woker-name'>Ромасюнь Віталій</p>
               <div className='worker-link'> 
                  <div className='link-icon'>
                     <FaPhoneAlt/>
                  </div>
                  <div className='link-info'>
                   <a className='tel' href="tel: +380967774389">+38(096)7774389</a>
                  </div>
               </div>              
            </div>
         </div>
         
      </div>
    
   )
}
export default Footer;
