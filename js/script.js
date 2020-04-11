function EasyPeasyParallax() {
	scrollPos = window.pageYOffset;
	$('.zr-hero').css(
		'background-position', '50%'+(scrollPos*0.35)+"px"
    );
}
EasyPeasyParallax();
$(document).ready(function(){
	$(window).scroll(function() {
		if($(window).scrollTop() < $('.zr-hero').height()){
		EasyPeasyParallax();
	}
	});

	$('[data-anchor=true]').click(function() {
		var elementClick = $(this).attr("href")
    var destination = ($(elementClick).offset().top - 140);
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 500);
    return false;
  });

	function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();


$('.open-map').on('click',function(event){
	event.stopPropagation();
	$('.modal').addClass('modal-show')
	$('.modals-overley').addClass('modals-overley-visible')
	$('body').css({
		"overflow":"hidden",
		"padding-right":scrollWidth + "px"
	})
	$('header').css('padding-right',scrollWidth+'px')
})

$('.modal').on('click',function(event){
	closeModal();
}).children()
.click(function(e){ 
		e.stopPropagation();
})
$('.close-modal').on('click',function(event){
	closeModal();
})

function closeModal(){
	event.stopPropagation();
	$('.modal').removeClass('modal-show')
	$('.modals-overley').removeClass('modals-overley-visible')
	$('body').css({
		"overflow":"auto",
		"padding-right":0 + "px"
	})
	$('header').css('padding-right',0+'px')
}

jQuery(document).on('keyup',function(evt) {
	if (evt.keyCode == 27) {
		closeModal();
	}
});

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [56.844564852502316,35.9152401884994],
				zoom: 17,
				controls: ['zoomControl'],
				behaviors: ['drag']
			}),
	
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
	
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: '<div class="hint-map">Склад #ЗАБОТАРЯДОМ</div>',
				balloonContent: '<div class="balloon-map">Склад #ЗАБОТАРЯДОМ</div>'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: './img/pin.svg',
				// Размеры метки.
				iconImageSize: [54, 54],
				iconImageOffset: [-27,-27]
			});
		myMap.geoObjects
			.add(myPlacemark)
		// .add(myPlacemarkWithContent);
	});


});