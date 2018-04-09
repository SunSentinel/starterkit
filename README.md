# Interactive Starter Kit

## About

A Gulp template for starting news apps and interactive projects at the Sun Sentinel.

## Recommended Setup

[Node Version Manager](https://github.com/creationix/nvm)

We're running Node 6. If you need to install and manage Node versions then use [nvm](https://github.com/creationix/nvm).

[Yarn](https://yarnpkg.com/en/docs/install)

Both `yarn` and `npm` will work just fine. We prefer Yarn which has some nice features under the hood that make life easier. To see a list of available commands, try `yarn run`.

## Installation

Based off of [Blendid](https://github.com/vigetlabs/blendid).

Extra additions:
- [jQuery](https://jquery.com/)
- [D3](https://d3js.org/) and [Topojson](https://github.com/mbostock/topojson)
- [pym.js](http://blog.apps.npr.org/pym.js/)
- [Swiper](http://idangero.us/swiper/)
- [Video.js](http://videojs.com/)

## Starting a project

To create a new project from this template, run:
```
git clone https://github.com/SunSentinel/starterkit.git MyApp
cd MyApp
yarn install
```

Whatever you name the project, in this case "MyApp," that will be the name of the folder it will be deployed to on the projects.sun-sentinel.com bucket. So keep in mind how you want the project's url to read. This example would be deployed as projects.sun-sentinel.com/MyApp

To remove git run `rm -rf .git`

### Serving

After dependencies are installed, run `yarn start`

This will kickstart the development server on [http://localhost:3000](http://localhost:3000).

To build out the project for production, run
`yarn build`

### Deployment

Starterkit is used for projects with flat files that will go onto our Amazon S3 bucket at projects.sun-sentinel.com.

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
