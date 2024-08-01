import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="main_box_color">
      <h1 className='Headretext'> Welcome to PreFixxer – Your Trusted Partner in Household Repairs</h1>
      <p className="subtext1">At PreFixxer, we understand that your home is your sanctuary, and maintaining it should be hassle-free. Our mission is to provide top-notch household repair services that ensure your home stays safe, comfortable, and functional.</p>

<img className='realimage' src="https://cdn.hometipsforwomen.com/wp-content/uploads/2011/05/08224642/contractors-hanging-drywall-ceiling-ht4w1280.jpg" alt="" />
      <p className="subtext2"> <span>Why Choose Us?</span><br />
<span>Expert Technicians:</span> Our team consists of skilled professionals with years of experience in handling a wide range of household repairs. From plumbing and electrical issues to carpentry and appliance repair, we’ve got you covered. <br /><br />

<span>Reliable and Efficient Service:</span> We pride ourselves on our prompt response times and efficient service. Your time is valuable, and we strive to complete every job quickly and effectively, minimizing disruption to your daily life. <br /><br />

<span>Quality Workmanship:</span> We use high-quality materials and the latest techniques to ensure lasting repairs. Our attention to detail and commitment to excellence means you can trust us to do the job right the first time. <br /><br />

<span>Affordable Pricing:</span> Transparent pricing with no hidden fees. We provide detailed estimates and work within your budget to deliver exceptional value. <br /><br />

<span>Customer Satisfaction:</span> Your satisfaction is our top priority. We stand behind our work and offer a satisfaction guarantee to ensure you are completely happy with our services <br /> </p>
    </div>
     
    </>
    
  )
}

export default Home
