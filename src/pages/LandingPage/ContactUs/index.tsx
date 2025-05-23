import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScroll, useTransform, motion } from "framer-motion";
import { TailSpin } from 'react-loader-spinner';
import './index.scss';

const ContactUs: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { scrollY } = useScroll();

  const yMainLandingContent = useTransform(scrollY, [7300, 7700], [700, 0]);
  const opacityMainLandingContent = useTransform(scrollY, [7500, 7700], [0, 1]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
      event.currentTarget,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
    )
      .then(
        (result) => {
          alert('Message sent successfully! We will get back to you soon.');
        })
      .catch(
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
        })
      .finally(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
      })
  };

  const handleMailClick = () => {
    const to = 'info@kuvia.com';
    const subject = encodeURIComponent('Hello from...');
    const body = encodeURIComponent('I wanted to reach out about...');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="kuvia-aboutus-contact" >
      <motion.div className="kuvia-aboutus-contact-container" style={{ y: yMainLandingContent, opacity: opacityMainLandingContent }}>
        <h1>Let's connect!</h1>
        <p>Whether you want to collaborate, join our mission, or simply learn more -<br />we'd love to hear from you</p>
        <div className='kuvia-aboutus-contact-form'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' placeholder="Your name" required />
            <label htmlFor="emailFrom">Email</label>
            <input type="email" name='email_from' id='emailFrom' placeholder="Your email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" placeholder="Your message" required />
            <button type="submit">Send</button>
          </form>
          <div className="kuvia-aboutus-contact-socials">
            <a href="https://www.linkedin.com/company/kuvia-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <svg width="30" height="30" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M66.375 0.397827C68.563 0.397827 70.6615 1.26702 72.2086 2.8142C73.7558 4.36137 74.625 6.45979 74.625 8.64783V66.3978C74.625 68.5859 73.7558 70.6843 72.2086 72.2315C70.6615 73.7786 68.563 74.6478 66.375 74.6478H8.625C6.43696 74.6478 4.33854 73.7786 2.79137 72.2315C1.24419 70.6843 0.375 68.5859 0.375 66.3978V8.64783C0.375 6.45979 1.24419 4.36137 2.79137 2.8142C4.33854 1.26702 6.43696 0.397827 8.625 0.397827H66.375ZM64.3125 64.3353V42.4728C64.3125 38.9063 62.8957 35.4859 60.3738 32.964C57.8519 30.4421 54.4315 29.0253 50.865 29.0253C47.3587 29.0253 43.275 31.1703 41.295 34.3878V29.8091H29.7863V64.3353H41.295V43.9991C41.295 40.8228 43.8525 38.2241 47.0288 38.2241C48.5604 38.2241 50.0293 38.8325 51.1123 39.9155C52.1953 40.9986 52.8037 42.4674 52.8037 43.9991V64.3353H64.3125ZM16.38 23.3328C18.218 23.3328 19.9806 22.6027 21.2803 21.3031C22.5799 20.0035 23.31 18.2408 23.31 16.4028C23.31 12.5666 20.2163 9.43158 16.38 9.43158C14.5311 9.43158 12.7579 10.166 11.4506 11.4734C10.1432 12.7808 9.40875 14.5539 9.40875 16.4028C9.40875 20.2391 12.5438 23.3328 16.38 23.3328ZM22.1138 64.3353V29.8091H10.6875V64.3353H22.1138Z" fill="currentColor"></path></svg>
            </a>
            <svg width="34" height="34" onClick={handleMailClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.85" stroke-width="1.25" d="M1.333 4.667l5.444 3.81c.44.309.66.463.9.523.212.052.434.052.646 0 .24-.06.46-.214.9-.523l5.444-3.81M4.533 13.333h6.934c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874c.218-.428.218-.987.218-2.108V5.867c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874c-.428-.218-.988-.218-2.108-.218H4.533c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874c-.218.428-.218.988-.218 2.108v4.266c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.428.218.988.218 2.108.218z"></path></svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactUs;