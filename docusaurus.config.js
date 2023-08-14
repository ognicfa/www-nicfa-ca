// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NICFA',
  tagline: 'North Island College Faculty Association',
  favicon: 'img/nicfa-logo.ico',

  // Set the production url of your site here
  url: 'https://www.nicfa.ca',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ognicfa', // Usually your GitHub org/user name.
  projectName: 'www-nicfa-ca', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nicfa-logo.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'NICFA Logo',
          //src: 'img/logo.svg',
          src: 'img/nicfa-logo.jpg',
        },
        items: [
          {to: '/members', label: 'Members', position: 'left'},
          {to: '/documents', label: 'Documents', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'FPSE',
                href: 'https://fpse.ca',
              },
              {
                label: 'CAUT',
                href: 'https://www.caut.ca',
              },
              {
                label: 'CLC',
                href: 'https://canadianlabour.ca',
              },
              {
                label: 'BCFED',
                href: 'https://bcfed.ca',
              },
              {
                label: 'NIC',
                href: 'https://www.nic.bc.ca',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: 'North Island College Faculty Association<br />'+
                      'c/o North Island College<br />'+
                      '2300 Ryan Road<br />'+
                      'Courtenay, BC  V9N 8N6<br /><br />'+
                      'Jen Wrye, President<br />'+
                      '(250)334-5030',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} North Island College Faculty Association`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
