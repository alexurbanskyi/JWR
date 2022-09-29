import './About.css'

function About () {
   return (
      <div className='about'>
         <div className="about-title">
            <div className='title-side'>Ювелірна</div>
            <div className='title-center'>JWR</div>
            <div className='title-side'>Майстерня</div>
         </div>
         <div className='services'>
            <p className='services-title'> послуги</p>
         </div>
         <div className='services-list'>
            <ul>
               <li>Ремонт Ювелірних Виробів</li>
               <li>Виготовлення Ювелірних Виробів під замовлення</li>
               <li>Обмін Ювелірних Виробів</li>
               <li>Виготовлення прикрас за Вашим ескізом</li>
            </ul>
         </div>
         <div className='services'>
            <p className='services-title'>де нас знайти</p>
         </div>
         <div className='place-name'>Торгівельний центр Жовтень</div>
         <div className='place-address'>проспект Коцюбинського, 34</div>
         <div className='map'>
            <div>
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460.49195570055895!2d28.498120167493497!3d49.23970493953941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b405d0935c1%3A0x907d2e0534d687ae!2z0KLQvtGA0LPQvtCy0YvQuSDRhtC10L3RgtGAINCW0L7QstGC0LXQvdGM!5e0!3m2!1sru!2sua!4v1664469033469!5m2!1sru!2sua" style={{width : 350,  height: 250 }}></iframe>
            </div>
         </div>
         <div className='services-list'>
            <ul>
               <li>Ремонт Ювелірних Виробів</li>
               <li>Виготовлення Ювелірних Виробів під замовлення</li>
               <li>Обмін Ювелірних Виробів</li>
               <li>Виготовлення прикрас за Вашим ескізом</li>
               <li>Ремонт Ювелірних Виробів</li>
               <li>Виготовлення Ювелірних Виробів під замовлення</li>
               <li>Обмін Ювелірних Виробів</li>
               <li>Виготовлення прикрас за Вашим ескізом</li>
            </ul>
         </div>
      </div>
   );
}
export default About;