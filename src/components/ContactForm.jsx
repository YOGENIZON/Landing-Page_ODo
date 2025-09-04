// Core
import React, { useState } from 'react';
// BootStrap
import { Alert } from 'react-bootstrap';
import NextLink from './NextLink';
// Library
import { useRouter } from 'next/router';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import ltrim from 'validator/lib/ltrim';
import rtrim from 'validator/lib/rtrim';
import isEmail from 'validator/lib/isEmail';
import Image from 'next/image';
import { treatmentsFooter } from '../data';
import Link from 'next/link';
//  UnComment This to Integrate Google Recaptcha
// import { useRecaptcha } from 'components/ReCaptcha';


const ContactForm = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  //  UnComment This to Integrate Google Recaptcha
  // const generateToken = useRecaptcha();
  const to_email = 'contact@example.com';
  const cc_email = 'arkayappsseo@gmail.com,sales@arkayapps.com';
  const title = `Website Appointment Form`;
  const subject = `Appointment - ENTrova`;
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(getTodayDate());
  const [dates, setDates] = useState('');
  const [time, setTime] = useState('');
  const [diseases, setDiseases] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [message, setMessage] = useState(null);
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
              <p>You Received Message From Appointment Form!</p>
          </div>
          <div class="card-body">
              <p><strong>Name : </strong>${name}</p>
              <p><strong>Diseases : </strong>${diseases}</p>
              <p><strong>Time - Date : </strong> ${time} On ${dates} </p>
              <p><strong>Message : </strong>${message}</p>
              <hr>
              <p><strong class="heading">Contact Information :</strong></p>
              <div class="innerwrap">
                  <p><strong>Mobile No: </strong>${mobile}</p>
                  <p><strong>Email: </strong>${email}</p>
              </div>
          </div>
          <div class="copyright">
              <p>© ${currentYear} ENTrova. All rights reserved.</p>
          </div>
      </div>
  </body>
  
  </html>`;
  const mailError = <p>{error}</p>;

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

  const handleDate = (event) => {
    let parts = event.target.value.split('-');
    setDates(`${parts[2]}-${parts[1]}-${parts[0]}`);
    const selectedDate = event.target.value;
    // Check if the selected date is today or in the future
    if (isDateValid(selectedDate)) {
      setDate(selectedDate);
      setError(null); // Reset any error messages
    } else {
      setError("Please select today's date or a future date."); // Show error if date is invalid
    }
  };

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;

    return `${year}-${month}-${day}`;
  }

  function isDateValid(selectedDate) {
    const today = getTodayDate();
    return selectedDate >= today;
  }

  const handleTime = (event) => {
    setTime(event.target.value);
    setError(null);
  };

  const handleMobile = (value) => {
    setMobile(value);
    setError(null);
  };

  const handleDiseases = (e) => {
    setDiseases(e.target.value);
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
  //   } else if (diseases === null) {
  //     setError(<Alert variant={'danger'}>Diseases Required</Alert>);
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
  //         setDate(getTodayDate());
  //         setDates('');
  //         setTime('');
  //         setDiseases(null);
  //         setMobile(null);
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
    <div className=" row z-0">
      <div className="effect py-12 mt-5 col-lg-5 offset-lg-1 ps-xxl-14 ps-lg-0 ps-sm-10  px-6 px-sm-0 ">
        <p className="fs-80 fw-bolder sub-h2 position-relative " >Our Experties </p>
        <h2 style={{ color: "#1563AB" }} className="display-5 mb-14 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17">
          ENT Treatments in Location
          <span 
            className="ms-2"
            style={{ borderBottom: '3px solid #D8D8D8', display: 'inline-block', width: '30px', height: '0px' }}
          ></span>
        </h2>
        <div className=''>
          {treatmentsFooter.map((item) => {
            return (
              <div
                key={item.title}
                className=" p-2 mb-1 d-flex justify-content-sm-around align-items-center flex-column flex-sm-row flex-wrap"
              >
                <div className='align-items-start'>
                  <figure className="rounded">
                    <Image
                      src={item.img}
                      alt={`${item.title} | ENTrova`}
                      width={100}
                      height={200}
                      className="position-static border-3 rounded-pill "
                      style={{ width: '80px', height: '80px' }}
                    />
                  </figure>
                </div>
                <div className="w-75 contact-cards">
                  <h3 className="mb-0">{item.title}</h3>
                  <p className='mb-0'>{item.discription}</p>
                  <div className=" d-flex contact-cards">
                    <NextLink title="Learn More" href={item.url} className="link text-second me-2 fw-bold" />
                    <i className="uil uil-arrow-right" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="col-lg-6 px-sm-14 px-5 pt-md-20 pt-10 pb-5 pb-md-0"
        style={{ backgroundImage: 'url(/img/photos/contact-form-bg.webp)' }}
      >
        <div className="border-0">
          <div className="card-body">
            <h2 className="mb-3 text-center text-white">Book An Appointment</h2>
            <p className="lead fs-18 text-center" style={{ color: '#9ebeff' }}>
              We will send you a confirmation within 24 hours.
            </p>
            <p className="text-center mb-10" style={{ color: '#9ebeff' }}>
              <b className="fs-20 text-white">Emergency? </b>Call <Link href="tel:+911234567890">+91 12345 67890</Link>
            </p>
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
                    <select
                      required
                      name="treatments"
                      id="form_treatments"
                      onChange={handleDiseases}
                      className="form-control"
                    >
                      <option value="">Select Treatments *</option>
                      <option value="Ear Infection">Ear Infection</option>
                      <option value="Ear Injury">Ear Injury</option>
                      <option value="Hearing Loss">Hearing Loss</option>
                      <option value="Tinnitus (Ringing in the Ears)">Tinnitus (Ringing in the Ears)</option>
                      <option value="Dizziness & Vertigo">Dizziness & Vertigo</option>
                      <option value="Sinus Infection (Sinusitis)">Sinus Infection (Sinusitis)</option>
                      <option value="Allergy Rhinitis">Allergy Rhinitis</option>
                      <option value="Nasal Fractures">Nasal Fractures</option>
                      <option value="Nose Bleeding">Nose Bleeding</option>
                      <option value="Nasal Polyps">Nasal Polyps</option>
                      <option value="Tonsillitis">Tonsillitis</option>
                      <option value="Throat Cancer">Throat Cancer</option>
                      <option value="Voice Disorders">Voice Disorders</option>
                      <option value="Swallowing Disorders">Swallowing Disorders</option>
                      <option value="Sore Throat (Pharyngitis)">Sore Throat (Pharyngitis)</option>
                      <option value="Head and Neck Cancer">Head and Neck Cancer</option>
                      <option value="Thyroid Disorders">Thyroid Disorders</option>
                      <option value="Others">Others</option>
                    </select>
                    <label htmlFor="form_treatments">Treatments *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please select a Treatments.</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      name="date"
                      type="date"
                      required
                      className="form-control"
                      value={date}
                      onChange={handleDate}
                    />
                    <label htmlFor="form_date">Date *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please select a valid date.</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-4">
                    <input
                      name="time"
                      type="time"
                      required
                      className="form-control"
                      value={time}
                      onChange={handleTime}
                    />
                    <label htmlFor="form_time">Time *</label>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please provide a valid time.</div>
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

export default ContactForm;
