# React Seed

This is a personal project providing a seed for starter react projects. It features webpack dev server with SCSS preprocessor, babel decorators and class properties as well as Hot Module Reloading.

## Install
To install dependencies run:

`yarn install`

OR

`npm install`

## Run
To check that everything worked you can run:

`yarn start`

OR

`npm start`

Then open your browser and go to `http://localhost:4000`.

## Test
Basic test configurations with jsdom and enzyme are provided as well as some libraries to help you with your unit testing. To run testing simply type in your console:

`yarn test`

OR

`npm test`

## Build
By default the seed has a build configuration for production assets. You can use it by simply running:

`yarn run build`

OR

`npm run build`

## Important notes
All the webpack configurations run based on your `NODE_ENV` environment variable. By default, if you have your `NODE_ENV` set to `development` it will look into your `config` folder for a `webpack.config.development.js` file.

So, for production builds you must set your `NODE_ENV` environment variable to `production`.

### Webpack configurations
This project provides you with 3 different files:
- `webpack.config.common.js`:

  This one contains all the common configuration for all environments.

- `webpack.config.local.js`:

  This one is the default configuration for the `start` script and includes all the necessary webpack dev server configuration.

- `webpack.config.production.js`:

  This one contains basic configuration for production builds.

Feel free to extend them as you need it.