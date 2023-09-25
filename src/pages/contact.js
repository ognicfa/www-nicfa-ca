import React from 'react';
import Obfuscate from 'react-obfuscate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SimpleContent from '@site/src/components/SimpleContent';
import SimpleHeader from '@site/src/components/SimpleHeader';
import ContactForm from '@site/src/components/ContactForm';
import { GoogleReCaptchaProvider }  from 'react-google-recaptcha-v3';

export default function ContactPage() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  return (
    <GoogleReCaptchaProvider reCaptchaKey={customFields.recaptchaKey}>
      <Layout
        title={`Contact`}
        description="Contact">
        <SimpleHeader bgimage="hands">Contact</SimpleHeader>
        <SimpleContent>
          <h1>Contact</h1>
          <p>
            This form is primarily for North Island College
            faculty members to contact 
            a steward. Complete this form and a steward 
            will be in touch with you as soon as possible. Or, you
            can email <Obfuscate email="contact@nicfa.ca" linkText="blimblam" />.
          </p>
          <ContactForm />
        </SimpleContent>
      </Layout>
    </GoogleReCaptchaProvider>
  );
}
