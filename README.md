# Interactive Starter Kit

## About

A fully featured configurable gulp asset pipeline for creating embeddable interactive graphics and visualizations.

## Installation

Based off of [Blendid](https://github.com/vigetlabs/blendid).

Extra additions:
- [jQuery](https://jquery.com/)
- [D3](https://d3js.org/) and [Topojson](https://github.com/mbostock/topojson)
- [pym.js](http://blog.apps.npr.org/pym.js/)
- [Swiper](http://idangero.us/swiper/)
- [Video.js](http://videojs.com/)

```
git clone https://github.com/SunSentinel/starterkit.git MyApp
cd MyApp
yarn install
```

To remove git run `rm -rf .git`

## Recommended Setup

[Node Version Manager](https://github.com/creationix/nvm)

We're running Node 6. If you need to install and manage Node versions then use [nvm](https://github.com/creationix/nvm).

[Yarn](https://yarnpkg.com/en/docs/install)

Both `yarn` and `npm` will work just fine. We prefer Yarn which has some nice features under the hood that make life easier. To see a list of available commands, try `yarn run`.

### Serving

`yarn start`

This will kickstart the development server on [http://localhost:3000](http://localhost:3000).

`yarn build`

## What's under the hood?

Feature | Packages Used
------ | -----
**CSS** | [Sass](http://sass-lang.com/) ([Libsass](http://sass-lang.com/libsass) via [node-sass](https://github.com/sass/node-sass)), [Autoprefixer](https://github.com/postcss/autoprefixer), [CSSNano](https://github.com/ben-eb/cssnano), Source Maps
**JavaScript** | [Babel](http://babeljs.io/), [webpack 3](https://webpack.js.org/)
**HTML** | [Nunjucks](https://mozilla.github.io/nunjucks/), [gulp-data](https://github.com/colynb/gulp-data)
**Live Updating** | [Browsersync](http://www.browsersync.io/), [webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
**Production Builds** | CSS is [minified](http://cssnano.co/), JS is compressed and optimized with various webpack plugins, [filename md5 hashing (reving)](https://github.com/sindresorhus/gulp-rev), [file size reporting](https://github.com/jaysalvat/gulp-sizereport) for long-term file caching
