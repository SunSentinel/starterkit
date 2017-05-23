# Interactive Starter Kit

## About

A fully featured configurable gulp asset pipeline for creating embeddable interactive graphics and visualizations.

## Installation

Based off of [Blendid](https://github.com/vigetlabs/blendid).

What's included:
- [Bourbon](http://bourbon.io/) and [Bourbon Neat](http://neat.bourbon.io/)
- [jQuery](https://jquery.com/)
- [D3](https://d3js.org/) and [Topojson](https://github.com/mbostock/topojson)
- [pym.js](http://blog.apps.npr.org/pym.js/)

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
