SpaceMySpace = {};

SpaceMySpace = {
	storage: {
		stars: []
	}	
}

SpaceMySpace.draw = function (element, options) {
	defaultOptions = {
		space: {
			background: 'radial-gradient(ellipse farthest-corner at 85% 70%, rgba(61,23,23,1) 3%, rgba(0,0,0,1) 35%, rgba(58,32,89,1) 100%)'
		}
	}
	var options = options || defaultOptions;
	//console.log(options);
	this.generate(element, 'space', options);
	this.generate(element, 'stars', options);
};

SpaceMySpace.generate = function (element, item, options) {
	var generate = {
		'space': this.generate.space(element, options[item]),
		'stars': this.generate.stars(element, options[item])
	}
};

SpaceMySpace.generate.space = function (element, options) {
	$(element).css({
		'background': options.background
	});
};

SpaceMySpace.generate.stars = function (element, options) {
	function drawStarsCollection() {


		for ( i = 0; i < 5; i++ ) {
			SpaceMySpace.storage.stars.push(SpaceMySpace.generate.stars.createStars());
		}
	}

	if (SpaceMySpace.storage.stars.length < 1) {
		console.log('it is');
		drawStarsCollection();
		if ( !$('html5-skyPainter-wrapper-stars').length ) {
			//$('body > :first-child > :first-child').wrap('<div class="html5-skyPainter-wrapper-stars" style="width: 100%; height: 100%;"></div>');
			$(element).append('<div class="html5-skyPainter-wrapper-stars"></div');
			$('.html5-skyPainter-wrapper-stars').css('position', 'absolute');
			$('.html5-skyPainter-wrapper-stars').css('height', '100%');
			$('.html5-skyPainter-wrapper-stars').css('width', '100%');
			$('.html5-skyPainter-wrapper-stars').css('top', '0');
			$('.html5-skyPainter-wrapper-stars').css('z-index', '1');
			//var random = Math.floor( Math.random() * collection.length );
			document.getElementsByClassName('html5-skyPainter-wrapper-stars')[0].style.background = SpaceMySpace.storage.stars[0];
		}
	}
};

SpaceMySpace.generate.stars.createStars = function() {
	function randomIncrement() { return Math.floor( Math.random() * starDensity ) }
	function randomSize() { return Math.floor( Math.random() * starSize ) }
	var starDensity = starDensity || 300;
	var starSize = starSize || 5;
	console.log(randomSize());

	var canvas = document.createElement('canvas');
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

	var ctx = canvas.getContext('2d');
	var x, y;

	for ( x = 0; x < canvas.width; x += randomIncrement() ) {
		for ( y = 0; y < canvas.height; y += randomIncrement() ) {
			ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';
			ctx.fillRect(x, y, randomSize(), randomSize());
		}
	}

	return "url(" + canvas.toDataURL("image/png") + ")";
}