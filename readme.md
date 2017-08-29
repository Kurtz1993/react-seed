# React Seed

This is a personal project providing a seed for starter react projects. It features webpack dev server with SCSS preprocessor, babel decorators and class properties as well as Hot Module Reloading.

## Install
To install dependencies run:
```
yarn install // OR
npm start
```

## Run
To check that everything worked you can run:
```
yarn start // OR
npm start
```

## Build
By default the seed has a build configuration for production assets. You can use it by simply running:
```
yarn run build // OR
npm run build
```

## Important notes
All the webpack configurations run based on your `NODE_ENV` environment variable. By default, if you have your `NODE_ENV` set to `development` it will look into your `config` folder for a `webpack.config.development.js` file.

So, for production builds you must set your `NODE_ENV` environment variable to `production`.