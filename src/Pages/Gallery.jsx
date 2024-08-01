import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className="forimagecolor">
      <h3 className="headerimage">Our Gallery</h3>
    <div className="images">
      <img src="https://cdn.thezebra.com/zfront/media/production/images/iStock-1205228815.width-1500.format-jpeg.jpg" alt="Service" />
      <img src="https://www.commandservice.com/sites/default/files/styles/news_720/public/Appliance-Repair.jpg?itok=T02bT_5D" alt="service" />
      <img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/931/506/Credible-home-repairs-iStock-1267057581.jpg?ve=1&tl=1" alt="service" />
      </div>
      <div className="images2">
         <img src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/09/waterpipe-repair.jpg?fit=400%2C684&ssl=1" alt="service" />
      <img src="https://livinator.com/wp-content/uploads/2021/06/home-repair.jpg" alt="service" />
      <img src="https://i.guim.co.uk/img/media/b371d35f2a2fc2b142a2f76d46f71bd505a9984f/0_352_5298_3181/master/5298.jpg?width=465&dpr=1&s=none" alt="seervic" />
      </div>
    </div>
    
     
    
    
    </>
      
  
  )
}

export default Gallery
