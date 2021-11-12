import React from 'react';
import TopHeader from '../TopHeader'
import NavBar from '../homepage/NavBar'
import ContactUsForm from './ContactUsForm'
function ContactUs(){

    return <div className="contact-us"> 
        <TopHeader />
        <NavBar />
        <div className="image-container-contact-us">
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="buddyStore" />
        </div>
        <ContactUsForm />
    </div>
}


export default ContactUs;