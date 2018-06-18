# Interactive Starter Kit

A Gulp template for starting full-page interactive projects at the Sun Sentinel.


## Getting started

Use the Sun Sentinel's [Yeoman interactives generator](https://github.com/SunSentinel/generator-sunsentinel-interactives.git) to generate a project with this template.

Or, you can clone use this template manually with `https://github.com/SunSentinel/starterkit.git MyApp`.

If you're using this as a template for a new project, remove the existing git repo with `rm -rf .git` and initialize a new repository for the new project with `git init`

> Whatever you name the project, in this case "MyApp", will be the name of the folder it will be deployed to on the projects.sun-sentinel.com bucket. So keep in mind how you want the project's url to read. This example would be deployed as projects.sun-sentinel.com/MyApp

### Requirements
+ Node 8 or later. If you need to install and manage Node versions then use [nvm](https://github.com/creationix/nvm).
+ [Yarn](https://yarnpkg.com/en/docs/install)
+ [Gulp](https://gulpjs.com/)


## Usage

Switch into the project's root folder and install dependencies with `yarn install`

After dependencies are installed, run `yarn start`. This will kickstart the development server on [http://localhost:3000](http://localhost:3000).

Once you're finished, build out the project for production with run
`yarn build`

### Deploying

Starterkit makes a stattic project that will go onto our Amazon S3 bucket at projects.sun-sentinel.com.

We automate our deployment process with the [gulp-awspublish](https://github.com/pgherveou/gulp-awspublish) library, which takes the 'public' folder and uploads it to the S3 bucket.

First, make sure you have the Sun Sentinel's AWS credentials in your environment variables.

Then, once the project is built, run `yarn deploy`

## What's under the hood?
Feature | Packages Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/) ([Libsass](http://sass-lang.com/libsass) via [node-sass](https://github.com/sass/node-sass)), [Autoprefixer](https://github.com/postcss/autoprefixer), [CSSNano](https://github.com/ben-eb/cssnano), Source Maps
**JavaScript** | [Babel](http://babeljs.io/), [webpack 3](https://webpack.js.org/)
**HTML** | [Nunjucks](https://mozilla.github.io/nunjucks/), [gulp-data](https://github.com/colynb/gulp-data)
**Live Updating** | [Browsersync](http://www.browsersync.io/), [webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
**Production Builds** | CSS is [minified](http://cssnano.co/), JS is compressed and optimized with various webpack plugins, [filename md5 hashing (reving)](https://github.com/sindresorhus/gulp-rev), [file size reporting](https://github.com/jaysalvat/gulp-sizereport) for long-term file caching


This project is based off of [Blendid](https://github.com/vigetlabs/blendid), but includes a few other libraries like:

- [jQuery](https://jquery.com/)
- [D3](https://d3js.org/) and [Topojson](https://github.com/mbostock/topojson)
- [pym.js](http://blog.apps.npr.org/pym.js/)
- [Swiper](http://idangero.us/swiper/)
- [Video.js](http://videojs.com/)