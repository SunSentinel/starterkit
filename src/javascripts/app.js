//check for loaded libraries
import { loadExample }  from './modules';
loadExample();

//utilities
import { doLazyLoad } from './modules/utilities/lazyload';
import { doNavigation } from './modules/utilities/nav';
import { loadComments } from './modules/utilities/comments';
import { doQuoteReveal } from './modules/utilities/quotes';
import { doSlider } from './modules/utilities/slider';
import { doShare } from './modules/utilities/share';

doLazyLoad();
doNavigation();
loadComments();
doQuoteReveal();
doSlider();
doShare();

console.log(`app.js has loaded!`);