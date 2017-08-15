import * as d3 from 'd3';
import * as topojson from 'topojson';
import pym from 'pym.js';

//check for loaded libraries
const loadExample = () => {
  console.log(`
    jQuery: ${$},
    d3: ${d3},
    topojson: ${topojson},
    pym: ${pym}
  `);
}

export { loadExample };