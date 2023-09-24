# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Environment Variables

You need to set `REACT_APP_BACKEND_URL` with the URL of the
corresponding backend service.

`REACT_APP_RECAPTCHA_KEY` needs to have the reCAPTCHA key used to validate
certain requests.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
