// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  customFields: {
    recaptchaKey: process.env.REACT_APP_RECAPTCHA_KEY,
    backendURL: process.env.REACT_APP_BACKEND_URL,
    backendUpdateURL: process.env.REACT_APP_UPDATE_URL,
  },
  title: "NICFA",
  tagline: "North Island College Faculty Association",
  favicon: "img/nicfa-logo.ico",

  // Set the production url of your site here
  url: "https://www.nicfa.ca",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ognicfa", // Usually your GitHub org/user name.
  projectName: "www-nicfa-ca", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/nicfa-logo.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "NICFA Logo",
          //src: 'img/logo.svg',
          src: "img/nicfa-logo.jpg",
        },
        items: [
          { to: "/members", label: "Members", position: "left" },
          { to: "/documents", label: "Documents", position: "left" },
          { to: "/update", label: "Update My Info", position: "left" },
          { to: "/contact", label: "Contact Us", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Contact Us",
                to: "contact/",
              },
              {
                label: "FPSE",
                href: "https://fpse.ca",
              },
              {
                label: "CAUT",
                href: "https://www.caut.ca",
              },
              {
                label: "CLC",
                href: "https://canadianlabour.ca",
              },
              {
                label: "BCFED",
                href: "https://bcfed.ca",
              },
              {
                label: "NIC",
                href: "https://www.nic.bc.ca",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} North Island College Faculty Association`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
