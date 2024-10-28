import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SimpleContent from "@site/src/components/SimpleContent";
import SimpleHeader from "@site/src/components/SimpleHeader";
import VerifyForm from "@site/src/components/VerifyForm";

export default function UpdatePage() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  return (
    <Layout
      title={`Verify Contact Information`}
      description="Verify Contact Information"
    >
      <SimpleHeader bgimage="files">Verify Contact Information</SimpleHeader>
      <SimpleContent>
        <p>
          Members can use the form below to verify and/or update thier non-work
          contact information. If the information shown below is correct, no
          further action is required. If the information below is not correct,
          update the fields and submit the form.
        </p>
        <p>
          Be sure that you have access to the new email address and/or the new
          phone number. A confirmation email and/or text message
          will be sent in order to complete the update.
        </p>
        <VerifyForm />
      </SimpleContent>
    </Layout>
  );
}
