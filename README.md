# Mirador Playground

This application is a small React.js codebase that serves a contained environment for testing IIIF via a Mirador 3.0.0 viewer. To run, you'll just need current versions `npm` (Node.js) and `yarn`. 

## Playing

- `yarn start`
- Open [http://localhost:8080](http://localhost:8080/) in your browser.

In your your IDE, you can modify manifests at - Modify manifests at `./assets/iiif/manifest` and items at `./assets/item`. Content within `./assets` will be served to the root of the local development URL of http://localhost:8080.

To change the manifest being loaded by the Mirador viewer, update the state variable in `./src/App.js`

```
this.state = {
    manifest: 'http://localhost:8080/iiif/manifest/sound.json',
};
```

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

To run the React.js compile process for this application, you'll need a current version of the Yarn package manager.

If you already have Node.js, you can install yarn quickly:
```
npm install --global yarn
```

## Installation

- `yarn`

Running `yarn` will install all dependencies, including:

- React 16
- Webpack 5
- Babel 7
- Mirador 3

