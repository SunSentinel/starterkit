
import ScrollReveal from 'scrollreveal';
window.sr = ScrollReveal();

export default function doQuoteReveal() {
	sr.reveal('.pull-quote', {
		origin: 'right',
		duration: 1000,
		distance: '50vh',
		opacity: .2
	});
}
