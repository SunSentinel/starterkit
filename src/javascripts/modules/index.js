import * as d3 from 'd3';
import * as topojson from 'topojson';
import pym from 'pym.js'

/*
  Check loaded libraries
*/
const loadExample = () => {
  console.log(`
    jQuery: ${$},
    d3: ${d3},
    topojson: $(topojson),
    pym: ${pym}
  `);
}
export { loadExample };

/*
  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/

const moduleElements = document.querySelectorAll('[data-module]')

for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  const Module = require(`./${name}`).default
  new Module(el)
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
