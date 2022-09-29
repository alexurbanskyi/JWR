import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Layout.css'
function Layout() {
   return(
      <div className="container">
         <Header/>
         <div className="main-screen">
            <Outlet/>
         </div>
         <Footer/>
      </div>
   );   
}
export default Layout;