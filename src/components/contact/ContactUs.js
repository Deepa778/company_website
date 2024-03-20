import React from 'react'
import '../contact/Contact.css'
import { HeatMapOutlined, MailOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons'

const ContactUs = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2547fcb1-54f1-45df-8ba8-a9573d9a5ed4");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };
    
  return (
    <div className='my-5'>
        <div className='text-center text-3xl font-bold p-2 text-orange-950'>Contact Us</div>
        <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5591414360747!2d85.30936362546709!3d27.70001752618681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854946dc785%3A0x33dc60cc6e250316!2sSundhara%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1709323683681!5m2!1sen!2snp" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        
        <div className='contact'>
        <div className='contact-col'>
          <h1 className='px-10 text-3xl font-bold p-2 text-gray-900'>Get in Touch</h1>
            <h3>Send Us Message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our company. </p>
            <ul>
                <li className='text-xl text-blue-950'> <MailOutlined className='font-medium ' />contact@gmail.com </li>
                <li className='text-xl text-blue-950' > <PhoneOutlined />+9811342568</li>
                <li className='text-xl text-blue-950' > <HeatMapOutlined />Kathmandu,Nepal</li>
            </ul>
          
        </div>
        <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label className='font-bold text-xl'>Your Name</label>
            <input type='text'name='name' placeholder='enter you name' required/>

            <label className='font-bold text-xl'>Phone Number</label>
            <input type='tel'name='phone' placeholder='enter you number' required/>

            <label className='font-bold text-xl'>Write Your Message here</label>
            <textarea name='message' rows="6" placeholder='enter your message' required></textarea>
            <button type='submit'className= 'bg-blue-500 text-white px-4 py-2 rounded-md'>Submit now</button>

         </form>
         <span>{result}</span>
        </div>
    </div>
    </div>
    
  )
}

export default ContactUs