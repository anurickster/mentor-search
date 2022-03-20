//

import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import Navigationbar from "../Navigationbar/Navigationbar";
import Footer from "../Footerpage/Footer";

import Map from "./Map";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <>
      <Navigationbar />
<<<<<<< HEAD
      <h2 className='text-center'>Contact Us</h2>
      <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formSubmit}>
          <div>
            <label for='exampleFormControlInput1' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              name='fullname'
              value={data.fullname}
              onChange={InputEvent}
              placeholder='Enter Your Name'
            />
          </div>

          <div>
            <label for='exampleFormControlInput1' className='form-label'>
              Phone Number
            </label>
            <input
              type='number'
              className='form-control'
              id='exampleFormControlInput1'
              name='phone'
              value={data.phone}
              onChange={InputEvent}
              placeholder='Enter Your Mobile Number'
            />
=======

      <ContactSectionStyle>
        <div className='container'>
          <SectionTitle heading='contact' subheading='Get in Touch' />
          <div className='contactSection__wrapper'>
            <div className='left'>
              <ContactInfoItem icon={<MdLocalPhone />} text='+91 1234567891' />
              <ContactInfoItem icon={<MdEmail />} text='findmentor@gmail.com' />
              <ContactInfoItem text='Pune Maharashtra' />
            </div>
            <div className='right'>
              <ContactForm />
            </div>
>>>>>>> 498d88101f681a058777edad4b44f44c3287cc0f
          </div>
        </div>
      </ContactSectionStyle>
      <Map />
      <Footer />
    </>
  );
}
