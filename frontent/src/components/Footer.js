import React from 'react'
import { useState } from 'react'
import { api } from '../constants/api'
import '../css-components/footer.css'
import JsonData from '../data/data.json'
export const Footer = (props) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('')
  const [text, setText] = useState('');

  const [landingPageData, setLandingPageData] = useState({});
  function pushForm(e) {

    let podatok = {
      name: name,
      companyName: companyName,
      email: email,
      phoneNumber: phoneNumber,
      text: text,

    }

    fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'JsonData',
      },
      body:JsonData
    })
      .then(res => res.json()
      )
      .then(data => {
        console.log(data)
      })
      .catch(err => { if (err) { console.log(err) } })
  }


  const handleSubmit = (event) => {
    pushForm();
    event.preventDefault();
  }



  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate
                onSubmit={handleSubmit}
              >
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='companyName'
                        className='form-control'
                        placeholder='Company Name'
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='number'
                        id='number'
                        name='PhoneNumber'
                        className='form-control'
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='text'
                    id='text'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    value={text}
                    onChange={e => setText(e.target.value)}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-thumb-tack'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-mobile'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  {/* <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li> */}
                  <li>
                    <a target="blank" href={props.data ? props.data.linkedin : '/'}>
                      <i className='fa fa-linkedin-square' ></i>
                    </a>
                  </li>
                  <li>
                    <a target="blank" href={props.data ? props.data.mail : '/'}>
                      <i className='fa fa-envelope-o'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; Copyright © 2022. All rights reserved

          </p>
        </div>
      </div>
    </div>
  )
}
