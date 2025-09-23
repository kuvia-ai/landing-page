import React, { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { TailSpin } from 'react-loader-spinner';
import { AppContext } from '../../../context/AppContext';
import './index.scss';

const ContactUs: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.VITE_EMAILJS_SERVICE_ID || '',
        process.env.VITE_EMAILJS_TEMPLATE_ID || '',
        event.currentTarget,
        process.env.VITE_EMAILJS_PUBLIC_KEY || ''
      )
      .then((result) => {
        setIsSent(true);
      })
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send message, please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      });
  };

  const handleMailClick = () => {
    const to = 'info@kuvia.ai';
    const subject = encodeURIComponent('Hello from...');
    const body = encodeURIComponent('I wanted to reach out about...');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="kuvia-aboutus-contact">
      <div className="kuvia-aboutus-contact-container">
        <h1>Get in Touch</h1>
        <p>
          Have any questions or need more information about our services? <br />{' '}
          Please fill out the form below, and we'll get back to you as soon as
          possible.
        </p>
        <div className="kuvia-aboutus-contact-form">
          <div className="kuvia-aboutus-contact-form-content">
            {!isLoading && !isSent && (
              <form ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                />
                <label htmlFor="emailFrom">Email</label>
                <input
                  type="email"
                  name="email_from"
                  id="emailFrom"
                  placeholder="Your email"
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  defaultValue="Hi! I would like to know more about …"
                  required
                />
                <button type="submit">Send</button>
                <div className="kuvia-aboutus-contact-socials">
                  <a
                    href="https://www.linkedin.com/company/kuvia-ai/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 75 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M66.375 0.397827C68.563 0.397827 70.6615 1.26702 72.2086 2.8142C73.7558 4.36137 74.625 6.45979 74.625 8.64783V66.3978C74.625 68.5859 73.7558 70.6843 72.2086 72.2315C70.6615 73.7786 68.563 74.6478 66.375 74.6478H8.625C6.43696 74.6478 4.33854 73.7786 2.79137 72.2315C1.24419 70.6843 0.375 68.5859 0.375 66.3978V8.64783C0.375 6.45979 1.24419 4.36137 2.79137 2.8142C4.33854 1.26702 6.43696 0.397827 8.625 0.397827H66.375ZM64.3125 64.3353V42.4728C64.3125 38.9063 62.8957 35.4859 60.3738 32.964C57.8519 30.4421 54.4315 29.0253 50.865 29.0253C47.3587 29.0253 43.275 31.1703 41.295 34.3878V29.8091H29.7863V64.3353H41.295V43.9991C41.295 40.8228 43.8525 38.2241 47.0288 38.2241C48.5604 38.2241 50.0293 38.8325 51.1123 39.9155C52.1953 40.9986 52.8037 42.4674 52.8037 43.9991V64.3353H64.3125ZM16.38 23.3328C18.218 23.3328 19.9806 22.6027 21.2803 21.3031C22.5799 20.0035 23.31 18.2408 23.31 16.4028C23.31 12.5666 20.2163 9.43158 16.38 9.43158C14.5311 9.43158 12.7579 10.166 11.4506 11.4734C10.1432 12.7808 9.40875 14.5539 9.40875 16.4028C9.40875 20.2391 12.5438 23.3328 16.38 23.3328ZM22.1138 64.3353V29.8091H10.6875V64.3353H22.1138Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <svg
                    width="34"
                    height="34"
                    onClick={handleMailClick}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    style={{ marginTop: '-2px' }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.85"
                      strokeWidth="1.25"
                      d="M1.333 4.667l5.444 3.81c.44.309.66.463.9.523.212.052.434.052.646 0 .24-.06.46-.214.9-.523l5.444-3.81M4.533 13.333h6.934c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874c.218-.428.218-.987.218-2.108V5.867c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874c-.428-.218-.988-.218-2.108-.218H4.533c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874c-.218.428-.218.988-.218 2.108v4.266c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874c.428.218.988.218 2.108.218z"
                    ></path>
                  </svg>
                </div>
              </form>
            )}
            {isLoading && (
              <div className="kuvia-aboutus-contact-form-loading">
                <TailSpin
                  height={`${!isMobile ? '100' : '80'}`}
                  width={`${!isMobile ? '100' : '80'}`}
                  color="#d6bad2"
                  ariaLabel="tail-spin-loading"
                  radius="4"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
                <p>Sending...</p>
              </div>
            )}
            {!isLoading && isSent && (
              <div className="kuvia-aboutus-contact-form-sent">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#34d554"
                  stroke="#34d554"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>success</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="add-copy"
                        fill="#32cd44"
                        transform="translate(42.666667, 42.666667)"
                      >
                        <path
                          d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <h3>Message sent successfully!</h3>
                <p>
                  Thanks for getting in touch! We’ve received your message and
                  will get back to you as soon as we can.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
