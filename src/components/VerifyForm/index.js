import React, { useState, useCallback, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function VerifyForm() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [state, setState] = useState("new");
  const [email, setEmail] = useState("");
  const [oldPersonalEmail, setOldPersonalEmail] = useState("");
  const [oldPersonalTel, setOldPersonalTel] = useState("");
  const [oldMobile, setOldMobile] = useState(false);
  const [newPersonalEmail, setNewPersonalEmail] = useState("");
  const [newPersonalTel, setNewPersonalTel] = useState("");
  const [newMobile, setNewMobile] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [telToken, setTelToken] = useState("");
  const [showInvalidCodeMessage, setShowInvalidCodeMessage] = useState(false);
  const [showPhoneThanks, setShowPhoneThanks] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const updateEmailPhone = (data) => {
    fetch(customFields.backendUpdateURL + "/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resdata) => {
        console.log(resdata);
        if ("telToken" in resdata && resdata.telToken) {
          setTelToken(resdata.telToken);
        }
        setState("submitted");
        setShowInvalidCodeMessage(false);
      })
      .catch((err) => {
        console.log("There was a problem posting the request.");
        setState("problem");
      });
  };

  const checkConfirmationCode = (data) => {
    fetch(customFields.backendUpdateURL + "/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resdata) => {
        if (resdata.message == "invalid code") {
          setShowInvalidCodeMessage(true);
        } else {
          setShowPhoneThanks(true);
          setShowInvalidCodeMessage(false);
        }
        console.log(resdata);
        setState("submitted");
      })
      .catch((err) => {
        console.log("There was a problem posting the request.");
        setState("problem");
      });
  };

  useEffect(() => {
    console.log("in useEffect");
    fetch(customFields.backendUpdateURL + "/verify/" + token)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success");
        console.log(data);
        if (data.message.startsWith("Invalid")) {
          console.log(data.message);
          setState("invalid");
        } else {
          setEmail(data.email);
          setOldPersonalEmail(data.personalEmail);
          setOldPersonalTel(data.personalTel);
          setOldMobile(data.mobile);
          setNewPersonalEmail(data.personalEmail);
          setNewPersonalTel(data.personalTel);
          setNewMobile(data.mobile);
        }
        console.log("Success 2");
      })
      .catch((err) => {
        setState("problem");
        console.log("There was a problem fetching the account request.");
      });
  }, []);

  const handleCodeSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const inputs = e.target.elements;
    const data = {
      telToken,
      code: confirmationCode
    };

    setState("processing");

    checkConfirmationCode(data);
    console.log("Everything OK");
    console.log(data);
  }, [telToken, confirmationCode]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!e.target.checkValidity()) {
      console.log("Invalid email entered");
      return;
    }

    const data = {
      token,
      email: newPersonalEmail,
      tel: newPersonalTel,
      mobile: newMobile
    };

    if ((oldPersonalTel != newPersonalTel || oldMobile != newMobile) && !newMobile) {
      console.log( "Phone Thanks No Mobile");
      setShowPhoneThanks(true);
    }

    setState("processing");

    updateEmailPhone(data);
    console.log("Everything OK");
    console.log(data);
  }, [newPersonalEmail, oldPersonalTel, newPersonalTel, oldMobile, newMobile]);

  const handleEmailChange = (e) => {
    setNewPersonalEmail(e.target.value);
  };

  const handleTelChange = (e) => {
    setNewPersonalTel(e.target.value);
  };

  const handleMobileChange = (e) => {
    setNewMobile(e.target.checked);
  };

  const handleConfirmationCodeChange = (e) => {
    setConfirmationCode(e.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const invalidConfirmationCode = () => {
    return confirmationCode.length <= 0;
  };

  const invalidFields = () => {
    return (
      (newPersonalEmail == oldPersonalEmail &&
        newPersonalTel == oldPersonalTel &&
        newMobile == oldMobile) ||
      (newPersonalEmail.length > 0 && !validateEmail(newPersonalEmail)) ||
      (newPersonalTel.length > 0 &&
        !newPersonalTel.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) ||
      (newMobile && newPersonalTel.length <= 0)
    );
  };

  let classes = clsx(styles.verifyform);

  console.log( "showPhoneThanks: " + showPhoneThanks );
  switch (state) {
    case "invalid":
      return (
        <div className="alert alert--danger" role="alert">
          The token is invalid or has expired. Please 
          return to the <a href="/update">main 
          update page</a> and try again.
        </div>
      );
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
      let emailChangeDiv = "";
      let phoneChangeDiv = "";
      let invalidCodeMessageDiv = "";
      if (showInvalidCodeMessage) {
        invalidCodeMessageDiv = (
          <div className="alert alert--warning" role="alert">
            The code you entered does not match. Please try again.
          </div>
        );
      }
      if (oldPersonalEmail != newPersonalEmail) {
        emailChangeDiv = (
          <div className="alert alert--warning" role="alert">
            You changed your personal email address. An email was sent to your
            new personal email address with a link to confirm the new address.
            Please follow the link to complete the update.
          </div>
        );
      }
      if ((oldPersonalTel != newPersonalTel || oldMobile != newMobile) && newMobile) {
        phoneChangeDiv = (
          <div className="alert alert--warning" role="alert">
            <p>
              You changed your personal telephone number or whether the number
              was a mobile or not. You will receive a text message
              with a confirmation code from 778-909-1310. Enter the code
              below to confirm the change.
            </p>
            <form className={classes} onSubmit={handleCodeSubmit}>
              <div>
                <input type="hidden" name="telToken" value={telToken} />
                <label for="code">Confirmation Code</label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  required
                  value={confirmationCode}
                  onChange={handleConfirmationCodeChange}
                />
              </div>
              <div>
                <input
                  className="button button--primary margin-top--sm"
                  type="submit"
                  value="Confirm"
                  disabled={invalidConfirmationCode()}
                />
              </div>
            </form>
          </div>
        );
      }
      if ( showPhoneThanks ) {
        phoneChangeDiv = (
          <div className="alert alert--success" role="alert">
            Thanks for updating your phone information.
          </div>
        );
      }
      return (
        <div>
          {emailChangeDiv}
          {invalidCodeMessageDiv}
          {phoneChangeDiv}
        </div>
      );
  }

  return (
    <div>
      <h2>Current Contact Information</h2>
      <table>
        <tbody>
          <tr>
            <th>NIC Email Address</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Personal Email Address</th>
            <td>{oldPersonalEmail}</td>
          </tr>
          <tr>
            <th>Personal Phone Number</th>
            <td>{oldPersonalTel}</td>
          </tr>
          <tr>
            <th>
              Personal Phone Number
              <br />
              is a mobile
            </th>
            <td>{oldMobile ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <h2>New Contact Information</h2>
      <form className={classes} onSubmit={handleSubmit}>
        <div>
          <input type="hidden" name="token" value={token} />
          <label for="email">Personal Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="email"
            value={newPersonalEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label for="phone">Personal Phone Number (NNN-NNN-NNNN format)</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            autocomplete="tel"
            placeholder="NNN-NNN-NNNN"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={newPersonalTel}
            onChange={handleTelChange}
          />
        </div>
        <div>
          <label for="mobile">Personal Phone Number is a mobile that can receive text/SMS messages</label>
          <input
            type="checkbox"
            name="mobile"
            id="mobile"
            value="mobile"
            checked={newMobile}
            onChange={handleMobileChange}
          />
        </div>
        <div>
          <input
            className="button button--primary margin-top--sm"
            type="submit"
            value="Update contact information"
            disabled={invalidFields()}
          />
        </div>
      </form>
    </div>
  );
}
