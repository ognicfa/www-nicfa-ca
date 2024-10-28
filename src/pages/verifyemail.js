import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";

import Layout from "@theme/Layout";
import SimpleContent from "@site/src/components/SimpleContent";
import SimpleHeader from "@site/src/components/SimpleHeader";

export default function UpdatePage() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const [pageState, setPageState] = useState("processing");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  useEffect(() => {
    console.log("in useEffect");
    fetch(customFields.backendUpdateURL + "/verifyemail/" + token)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: fetch");
        console.log(data);
        if (data.message.startsWith("Success")) {
          setPageState("success");
          console.log(data.message);
        } else {
          setPageState("remoteproblem");
          console.log(data.message);
        }
      })
      .catch((err) => {
        setPageState("fetchproblem");
        console.log("There was a problem fetching the account request.");
      });
  }, []);

  let alert = "";

  switch (pageState) {
    case "processing":
      alert = (
        <div class="alert alert--warning" role="alert">
          Processing. Please wait ...
        </div>
      );
      break;
    case "success":
      alert = (
        <div class="alert alert--success" role="alert">
          Your personal email address has been updated.
        </div>
      );
      break;
    case "remoteproblem":
      alert = (
        <div class="alert alert--danger" role="alert">
          Link expired. Please restart process.
        </div>
      );
      break;
    case "fetchproblem":
      alert = (
        <div class="alert alert--danger" role="alert">
          System is down. Please try again later.
        </div>
      );
      break;
  }

  return (
    <Layout title={`Verify Personal Email`} description="Verify Personal Email">
      <SimpleHeader bgimage="files">Verify Personal Email</SimpleHeader>
      <SimpleContent>{alert}</SimpleContent>
    </Layout>
  );
}
