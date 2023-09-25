import React, { useState, useCallback } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import {  useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import styles from './styles.module.css';

export default function ContactForm() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

  const [submitted, setSubmitted] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [problem, setProblem] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleRecaptchaVerify = useCallback(async (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setProblem(true);
      return;
    }

    const token = await executeRecaptcha('formSubmit');
    // console.log( token );

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    data['token'] = token;

    fetch(
      customFields.backendURL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
      }
    )
    .then( (response) => response.json() )
    .then( (resdata) => {
      console.log( resdata );
      setSubmitted(true);
    })
    .catch( (err) => {
      console.log( "There was a problem creating a new account request.");
      setProblem(true);
    });
  }, [executeRecaptcha]);

  let classes = clsx( styles.contactform );

  if (problem) {
    return (
      <p>There is a problem with this form. Try again later.</p>
    );
  } else if (submitDisabled && !submitted) {
    return (
      <p>Sending message. This may take a minute ...</p>
    );
  } else if (submitted) {
    return (
      <p>Message sent. A steward will be in touch with you.</p>
    );
  }

  return (
    <form className={classes} onSubmit={handleRecaptchaVerify}>
      <div>
        <label for="name">Name</label>
        <input type="text" 
               name="name" 
               id="name" 
               autocomplete="name"
               placeholder="your name" 
               required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" 
               name="email" 
               id="email" 
               autocomplete="email"
               placeholder="your email address" 
               required />
      </div>
      <div>
        <label for="message">Message (maximum 500 characters)</label>
        <textarea name="message" id="message" maxlength="500" rows="5" cols="40" required></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" disabled={submitDisabled} />
      </div>
    </form>
  );
}
