
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ language }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u9ni1i3',
        'template_rkvunlm',
        form.current,
        'D4moz76iWtxqUI1QO'
      )
      .then(
        () => {
          alert(
            language === 'ur'
              ? '✅ پیغام کامیابی سے بھیج دیا گیا!'
              : '✅ Message sent successfully!'
          );
          form.current.reset();
        },
        (error) => {
          alert(
            language === 'ur'
              ? '❌ پیغام بھیجنے میں ناکامی۔ دوبارہ کوشش کریں۔'
              : '❌ Failed to send message. Try again.'
          );
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="get-in-toucing-heading">
            {language === 'ur' ? 'رابطہ کریں' : 'Get in Touch'}
          </h3>

          <p>Email: usamashahidrandhawa1@gmail.com</p>
          <p>{'Phone:'} +92-313-7793410</p>
          <p>{'Location: 56-C Samanabad, Faisalabad, Pakistan'}</p>

          {/* Social Sites Heading */}
          <h3 className="social-heading">
            {language === 'ur' ? 'ہم سے آن لائن جڑیں' : 'Let’s Connect'}
          </h3>


          <div className="social-icons">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/usama.shahid.randhawa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
                className="social-img"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/usama-shahid-randhawa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="social-img"
              />
            </a>

            {/* GitHub */}
            {/* <a
              href="https://github.com/UsamaShahid01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                className="social-img"
              />
            </a> */}


          </div>


        </div>

        <div className="contact-form">
          <h2>{language === 'ur' ? 'ہم سے رابطہ کریں' : 'Contact Us'}  </h2 >
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={language === 'ur' ? 'آپ کا نام' : 'Your Name'}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={language === 'ur' ? 'آپ کا ای میل' : 'Your Email'}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder={language === 'ur' ? 'آپ کا پیغام' : 'Your Message'}
              required
            ></textarea>
            <button type="submit" className='send-message-button'>
              {language === 'ur' ? 'پیغام بھیجیں' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
