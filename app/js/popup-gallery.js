import { log } from "./main"

export default function () {
	let gallery = document.querySelector('.portfolio-tale__gallery');

	if(gallery) {
		$('.portfolio-tale__gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Загрузка изображения #%curr%...',
				mainClass: 'mfp-img-portfolio',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>от Proffitness</small>'
					}
				}
			});
	}
		
}