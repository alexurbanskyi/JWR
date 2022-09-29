import './Repair.css'
import rep1 from '../../img/rep_1.png'
import rep3 from '../../img/rep_3.png'
import rep4 from '../../img/rep_4.png'
import rep5 from '../../img/rep_5.png'

function Repair() {
   return(
      <div className="repair">
         <div className='repair-elem'>
            <div className="img">
               <img src={rep1} width='150px'/>
            </div>
            <p className='repair-title'>пайка ланцюжків</p>
         </div>
         <div className='repair-elem reverse'>
            <div className="img">
               <img src={rep3} width='150px'/>
            </div>
            <p className='repair-title'>вставка камінців</p>
         </div>
         <div className='repair-elem'>
            <div className="img">
               <img src={rep4} width='150px'/>
            </div>
            <p className='repair-title'>полірування</p>
         </div>
         <div className='repair-elem reverse'>
            <div className="img">
               <img src={rep5} width='150px'/>
            </div>
            <p className='repair-title'>зміна розміру</p>
         </div>
      </div>
   );
}
export default Repair;