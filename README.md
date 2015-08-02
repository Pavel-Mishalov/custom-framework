# Webpack Skeleton Application

A skeleton application built around [Webpack](http://webpack.github.io/) with simplicity, minimalism and common needs in mind.


#### Key features

- [Babel](https://babeljs.io/) 
- [React](http://facebook.github.io/react/), [React Router](https://github.com/rackt/react-router) (1)
- [SASS](http://sass-lang.com/) (1)
- JavaScript (with ES6, [JSX](https://facebook.github.io/jsx/), cache-busting, minification, gzip compression)
- Stylesheets (with SASS, cache-busting, minification, gzip compression)
- Images (with cache-busting)
- Generator for the `index.html` entry point
- Development/Production environments (configurable using `NODE_ENV`)
- Config singleton (i.e. `require("config")`)
- Development server with live/hot reload (`npm run start`)
- Export for production deployment with all optimizations (`npm run build`)
- Predefined file/folder structure

---

1) Easily swappable for other languages/frameworks/libraries.


#### Installation

Clone the repository, rename, change directory, re-init git, with:

    git clone https://github.com/meskyanichi/webpack-skeleton.git
    mv webpack-skeleton my_app_name
    cd my_app_name
    rm -rf .git && git init

Then install the dependencies with:

    npm install

#### Commands

Run the development server with:

    npm run start

*This'll boot up a server at localhost:8080. Visit `/webpack-dev-server` if you want a status bar in the header.*

---

Build the application for distribution with:

    npm run build

*This generates a `dist` folder containing all distributable files for production. The `index.html` file is the entry point, which'll load in `bundle-[hash].js`. There is also a compressed version named `bundle-[hash].js.gz`. All of the cache-bustable files contain sha512 hash in their filename. Simply build and upload the `dist` folder to deploy.*

#### Webpack Plugins Used

- [FileLoader](https://github.com/webpack/file-loader)
- [StyleLoader](https://github.com/webpack/style-loader)
- [CssLoader](https://github.com/webpack/css-loader)
- [SassLoader](https://github.com/jtangelder/sass-loader)
- [BabelLoader](https://github.com/babel/babel-loader)
- [CompressionPlugin](https://github.com/webpack/compression-webpack-plugin)
- [HtmlWebpackPlugin](https://github.com/ampedandwired/html-webpack-plugin)
- [ReactHotLoader](https://github.com/gaearon/react-hot-loader)


#### Structure

Additional information regarding the directory/file structure and modules.


##### Directories/Files

- `dist` is where your production build is built (`npm run build`).
- `src/css/*.sass` is where you put your css (sass) files.
- `src/js/*.js` is where you put your js files.
- `src/images/*.(jpe?g|png|gif|svg)` is where you put your images.
- `src/env/*.js` is where you put all of your environment-specific files.
- `src/app.js` is the entry point of your application.
- `src/config.js` is a singleton object module, you can update it to add defaults.


##### Environments

There are two environments: development, production. Depending on which environment you're currently running in, a different environment file will be loaded. The environment files are located in `src/env/*.js`.

When in development, only the `src/env/development.js` file will be loaded. In production, only the `src/env/production.js` file will be loaded. This way you can configure your applications based on the current environment.

The default environment is development. When starting the development server with `npm run start` it'll run in development. When building the application with `npm run build` it'll automatically switch to production.

To force production (or any other environment) while developing, you can use `NODE_ENV=production npm run start`.


##### Config Module

The config module is a singleton on which you can get/set properties to share throughout the application. For example:

```js
// src/env/production.js
import config from "config";
config.host = "api.example.com";

// src/js/app.js
import config from "config";
console.log(config.host) // "api.example.com"
```

This module is located at `src/config.js`. You can add default properties by editting this file:

```js
// src/config.js
export default {
  host: "api.example.com"
};

// src/js/app.js
import config from "config";
console.log(config.host) // "api.example.com"
```


#### LICENSE

See [LICENSE](LICENSE).
