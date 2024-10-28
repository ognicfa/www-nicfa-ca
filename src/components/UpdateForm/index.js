import React, { useState, useCallback } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "./styles.module.css";

export default function UpdateForm() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [state, setState] = useState("new");
  const [email, setEmail] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const checkEmailTest = (data) => {
    setTimeout(() => {
      setState("problem");
    }, 2000);
  };

  const checkEmail = (data) => {
    fetch(customFields.backendUpdateURL + "/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resdata) => {
        console.log(resdata);
        setState("submitted");
      })
      .catch((err) => {
        console.log("There was a problem posting the request.");
        setState("problem");
      });
  };

  const invalidEmail = (e) =>
    e.target.setCustomValidity("You must enter a valid NIC email address");

  const inputEmail = (e) => e.target.setCustomValidity("");

  const handleRecaptchaVerify = useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!e.target.checkValidity()) {
        console.log("Invalid email entered");
        return;
      }

      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        setState("problem");
        return;
      }

      const token = await executeRecaptcha("formSubmit");

      const inputs = e.target.elements;
      const data = {};

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }

      data["token"] = token;

      setState("processing");

      //checkEmailTest(data);
      //delete data.email;
      // data.email =
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" +
      //   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      // data.email = "brian@koehler.ca";
      // delete data.token;
      // data.token = "foo";
      checkEmail(data);
      console.log("Everything OK");
      console.log(data);
    },
    [executeRecaptcha]
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const invalidEmailField = () => {
    return !email.match(/^[0-9A-Za-z'.-]+@nic\.bc\.ca$/);
  };

  let classes = clsx(styles.updateform);

  switch (state) {
    case "problem":
      return (
        <div className="alert alert--danger" role="alert">
          There is a problem with this form. Re-load the page and try again
          later.
        </div>
      );
    case "processing":
      return (
        <div className="alert alert--warning" role="alert">
          Processing ...
        </div>
      );
    case "submitted":
      return (
        <div className="alert alert--success" role="alert">
          Check your NIC email for a link that will allow you to verify or
          update your contact information. If it is not in your inbox, check
          your "Junk" folder or quarantine.
        </div>
      );
  }

  return (
    <form className={classes} onSubmit={handleRecaptchaVerify}>
      <div>
        <label for="email">NIC Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          placeholder="you@nic.bc.ca"
          pattern=".*@nic\.bc\.ca"
          onInvalid={invalidEmail}
          onInput={inputEmail}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <input
          className="button button--primary margin-top--sm"
          type="submit"
          value="Verify/update contact information"
          disabled={invalidEmailField()}
        />
      </div>
    </form>
  );
}
