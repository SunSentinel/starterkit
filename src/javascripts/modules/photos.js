
import Blazy from 'blazy';
	export default function doLazyLoad() {
	const lazy =  new Blazy({
		offset: 500,
		
		selector: '.js-lazy',
		
		success: function(el){
			el.parentNode.className += ' loaded';
		}
	});
}