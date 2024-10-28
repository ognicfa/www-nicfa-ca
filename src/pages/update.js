import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SimpleContent from "@site/src/components/SimpleContent";
import SimpleHeader from "@site/src/components/SimpleHeader";
import UpdateForm from "@site/src/components/UpdateForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function UpdatePage() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <GoogleReCaptchaProvider reCaptchaKey={customFields.recaptchaKey}>
      <Layout
        title={`Update Contact Information`}
        description="Update Contact Information"
      >
        <SimpleHeader bgimage="files">Update Contact Information</SimpleHeader>
        <SimpleContent>
          <p>
            Members can use the form below to verify and/or update their
            non-work contact information. NICFA will use this information to
            contact you in the event that the employer's email system is not
            available and/or appropriate.
          </p>
          <UpdateForm />
        </SimpleContent>
      </Layout>
    </GoogleReCaptchaProvider>
  );
}
