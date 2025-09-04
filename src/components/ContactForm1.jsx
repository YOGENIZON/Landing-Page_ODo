// Core
import React, { useState } from 'react';
// BootStrap
import { Alert } from 'react-bootstrap';
// Library
import { useRouter } from 'next/router';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import ltrim from 'validator/lib/ltrim';
import rtrim from 'validator/lib/rtrim';
import Link from 'next/link';
import isEmail from 'validator/lib/isEmail';
//  UnComment This to Integrate Google Recaptcha
// import { useRecaptcha } from 'components/ReCaptcha';

const ContactForm1 = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  //  UnComment This to Integrate Google Recaptcha
  // const generateToken = useRecaptcha();
  const to_email = 'contact@example.com';
  const cc_email = 'arkayappsseo@gmail.com,sales@arkayapps.com';
  const title = `Website Contact Form`;
  const subject = `Contact - ENTrova`;
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [message, setMessage] = useState(null);

  // Email Template
  const template = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ENTrova</title>
      <style>
          body {
              line-height: 1.4;
              font-family: sans-serif;
              background-color: #f6f6f6;
          }
  
          p {
              margin: 0;
              margin-bottom: 15px;
              font-size: 14px;
              font-weight: normal;
              font-family: sans-serif;
          }
  
          hr {
              border: 0;
              border-bottom: 1px solid #b9b9b9;
              margin: 10px 0;
          }
  
          .logo {
              margin-top: 1rem;
              margin-bottom: 1rem;
              width: 200px;
              height: auto;
          }
  
          .text-center {
              text-align: center !important;
          }
  
          .content {
              margin: 0 auto;
              display: block;
              max-width: 580px;
              padding: 0 10px;
              box-sizing: border-box;
          }
  
          .innerwrap {
              box-sizing: border-box;
              padding: 20px 20px 10px 20px;
              background: #f2f2f2;
          }
  
          .card-header {
              background: #1563ab;
              color: #fff;
              text-align: center;
              padding: 20px;
              font-size: 16px;
          }
  
          .shadow-header {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
  
          .shadow-body {
              box-shadow: 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          }
  
          .card-header p {
              color: #fff;
              text-align: center;
              font-size: 16px;
              margin-bottom: unset;
          }
  
          .card-body {
              background: #ffffff;
              border-radius: 3px;
              width: 100%;
              box-sizing: border-box;
              padding: 20px;
              border: 2px solid #1563ab !important;
              border: 0;
          }
  
          .card-body p strong {
              color: #333;
          }
  
          .card-body p strong.heading {
              color: #1563ab;
          }
  
          .copyright {
              color: #999999;
              font-size: 12px;
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 1rem;
          }
      </style>
  </head>
  
  <body>
      <div class="content">
          <div class="text-center">
           <img src="https://entrova.com/img/logo.png" alt="Logo | ENTrova" class="logo">

          </div>
          <div class="card-header">
              <p>You Received Message From Contact Form!</p>
              </div>
              <div  style={{ boxShadow: '0.5rem 1rem rgba(0,0,0,0.15)' }} class="card-body">
              <p><strong>Name : </strong>${name}</p>
              <p><strong>Subject : </strong>${subjects}</p>
              <p><strong>Message : </strong>${message}</p>
              <hr>
              <p><strong class="heading">Contact Information :</strong></p>
              <div class="innerwrap">
                  <p><strong>Mobile No: </strong>${mobile}</p>
                  <p><strong>Email: </strong>${email}</p>
              </div>
          </div>
          <div class="copyright">
              <p>© ${currentYear} ENTrova.
              All rights reserved.</p>
          </div>
      </div>
  </body>
  
  </html>`;

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setError(null);
  };

  const handleEmail = (e) => {
    var value = e.target.value;
    value = ltrim(rtrim(value));
    setEmail(value);
    if (!isEmail(value)) {
      setError(<Alert variant={'danger'}>Please enter a valid email</Alert>);
    } else {
      setError(null);
    }
  };

  const handleSubjects = (e) => {
    const value = e.target.value;
    setSubjects(value);
    setError(null);
  };

  const handleMobile = (value) => {
    setMobile(value);
    setError(null);
  };

  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);
    setError(null);
  };

  //  UnComment This to Integrate Google Recaptcha
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === null) {
  //     setError(<Alert variant={'danger'}>Full Name Required</Alert>);
  //   } else if (email === null) {
  //     setError(<Alert variant={'danger'}>Email Required</Alert>);
  //   } else if (mobile === null) {
  //     setError(<Alert variant={'danger'}>Phone Required</Alert>);
  //   } else if (message === null) {
  //     setError(<Alert variant={'danger'}>Message Required</Alert>);
  //   } else {
  //     const formData = new FormData();

  //     formData.append('title', title);
  //     formData.append('to_email', to_email);
  //     formData.append('cc', cc_email);
  //     formData.append('subject', subject);
  //     formData.append('template', template);

  //     const headerConfig = {
  //       headers: {
  //         accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     };
  //     const url = 'https://api.com'; //add api url here
  //     axios
  //       .post(url, formData, headerConfig)
  //       .then((response) => {
  //         setError(null);
  //         setName(null);
  //         setEmail(null);
  //         setMobile(null);
  //         setSubjects(null);
  //         setMessage(null);
  //         router.push('/');
  //       })
  //       .catch((error) => {
  //         console.log(error.response.data.detail);
  //         if (error.response) {
  //           console.log(error.response);
  //         } else if (error.request) {
  //           console.log(error.request);
  //         } else {
  //           console.log(error);
  //         }
  //         setError(<Alert variant={'danger'}>{'Something Went Wrong, Please Try Again Later!'}</Alert>);
  //       });
  //   }
  // };

  const handleRecaptchaVerify = async (e) => {
    e.preventDefault();
    console.log("Form Submited!")
    //  UnComment This to Integrate Google Recaptcha
    // setLoading(true);
    // generateToken((token) => {
    //   const recaptchaData = new FormData();
    //   const headerConfig = {
    //     headers: {
    //       accept: 'multipart/form-data',
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   };
    //   recaptchaData.append('secret', '*************************'); // add recaptcha secret key
    //   recaptchaData.append('response', token);

    //   axios
    //     .post('https://api.com', recaptchaData, headerConfig) // app you api url here
    //     .then((res) => {
    //       console.log('res.data.score', res.data.score);
    //       if (res.data.score > 0.5) {
    //         handleFormSubmit(e);
    //       } else {
    //         toast.error(res.data['error-codes'][0]);
    //         // setLoading(false);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       toast.error('Please Try Again Later.');
    //     });
    // });
  };

  return (
    <div className="row z-0">
      <div className="effect  pt-10 col-lg-5 offset-lg-1 ps-10 ps-sm-14 ps-md-10 px-6 px-sm-0 ">
        <p className="fs-80 fw-bolder sub-h2 position-relative m-0">Contact</p>
        <h2 style={{ color: '#1563AB' }} className="mb-14 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17">
          Get In Touch With Us
          <span
            className="ms-2"
            style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
          ></span>
        </h2>
        <div className="pe-0 pe-md-8 pe-lg-16">
          <p>
            At ENTrova, your health and well-being are our top priorities. Whether you're seeking treatment
            for an ear, nose, or throat condition, our dedicated team is here to provide you with the highest standard
            of care. Contact us today to schedule an appointment or to learn more about our services.
          </p>

          <h3 className="fw-bold mb-8">Stay connected</h3>
          <div className="justify-content-around mb-10">
            <div className="d-flex flex-row justify-content-around">
              <Link href="https://www.facebook.com/profile.php?id=61557750803700" className=" hover" target="_blank">
                <div className="icon fs-36 text-main">
                  <i className="uil uil-facebook"></i>
                </div>
              </Link>
              <Link href="https://www.instagram.com/monestdental/" className="hover" target="_blank">
                <div className="icon fs-36 text-main">
                  <i className="uil uil-instagram"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-6 px-sm-14 px-5 pt-md-10 pt-5 bg-gray">
        <div className=" border-0">
          <div className="card-body   ">
            <h2 className="text-center">Leave Us Your Info</h2>
            <p className="lead fs-18 text-center">and We will get back to you.</p>

            <form className="contact-form" onSubmit={handleRecaptchaVerify}>
              <div className="messages"></div>
              <div className="row gx-4">
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      required
                      type="text"
                      name="name"
                      id="form_name"
                      value={name}
                      onChange={handleName}
                      placeholder="Name"
                      className="form-control"
                    />
                    <label htmlFor="form_name">Full Name *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please enter your full name.</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <PhoneInput
                      name="mobile"
                      country={'in'}
                      value={mobile}
                      onChange={handleMobile}
                      inputProps={{ minLength: 10, maxLength: 16 }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please enter your mobile number.</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      name="email"
                      type="email"
                      required
                      className="form-control"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Email"
                    />
                    <label htmlFor="form_email">Email *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please provide a valid email address.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      required
                      type="text"
                      name="name"
                      id="form_subject"
                      value={subjects}
                      onChange={handleSubjects}
                      placeholder="Name"
                      className="form-control"
                    />
                    <label htmlFor="form_subject">Subject *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please enter your reason to contact.</div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating mb-4">
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Message"
                      className="form-control"
                      required
                      minLength={3}
                      maxLength={200}
                      value={message}
                      onChange={handleMessage}
                      style={{ height: 150 }}
                    />
                    <label htmlFor="form_message">Message *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please enter a message.</div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <p className="text-muted fs-18">
                    <strong>*</strong> These fields are required.
                  </p>
                  <input type="submit" value="Submit Now" className="btn text-white secondary-bg text-white mb-3" />
                  <p className="text-muted fs-18">{error}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm1;
