import React, {useState}from "react";

function ContactUsForm(){
const [contactForm, setContactForm] = useState({name: "", description: "", email: ""})

function handleSubmit(e){
    e.preventDefault()
    console.log(contactForm)
    fetch('/question_from_customers',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)           
    })
    setContactForm({name: "", description: "", email: ""})
}

function handleOnChange(e){
    const key = e.target.name
    setContactForm({...contactForm, [key] : e.target.value})
}
    return <div className="contact-us-form">
        <h1> Contact Us</h1>
        <p> If you have any question or comment about the product, please fill the form below with all of your detail information and we will get back to you within 24 hours. Or feel free to contact us at 469-714-6970 or 469-803-2992. We'll available to take your call between 9 am to 5 pm.</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={contactForm.name} onChange={handleOnChange}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email"value={contactForm.email} onChange={handleOnChange}/>
            </div>
            <div>
                <label>Description:</label>
                <textarea type="text" name="description" value={contactForm.description} onChange={handleOnChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
}


export default ContactUsForm