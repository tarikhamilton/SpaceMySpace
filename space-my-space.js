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
		},
		stars: {
			spread: 270,
			maxStarSize: 5
		}
	}
	var options = options || defaultOptions;
	this.generate(element, 'space', options);
	this.generate(element, 'stars', options);
};

SpaceMySpace.generate = function (element, item, options) {
	var self = this;
	var generate = {
		'space': function() { return self.generate.space(element, options[item]) },
		'stars': function() { return self.generate.stars(element, options[item]) }
	}
	generate[item]();
};

SpaceMySpace.generate.space = function (element, options) {
	$(element).css({
		'background': options.background
	});
	$(element).append('<div id="tikisms-wrapper-glow"></div>');
};

SpaceMySpace.generate.stars = function (element, options) {
	function drawStarsCollection() {
		for ( i = 0; i < 5; i++ )
			SpaceMySpace.storage.stars.push(SpaceMySpace.generate.stars.createStars(options));
	}

	if (SpaceMySpace.storage.stars.length < 1) {
		drawStarsCollection();
		if ( !document.getElementById('tikisms-wrapper-stars') ) {
			$(element).append('<div id="tikisms-wrapper-stars"></div>');
			document.getElementById('tikisms-wrapper-stars').style.background = SpaceMySpace.storage.stars[0];
		}
	}
	setInterval(this.stars.twinkle, 7000);
};

SpaceMySpace.generate.stars.twinkle = function() {
	var wrapper = document.getElementById('tikisms-wrapper-stars');
	wrapper.className ='tikisms-stars-faded-out';
	setTimeout( function() {
		wrapper.style.background = SpaceMySpace.storage.stars[Math.floor( Math.random() * SpaceMySpace.storage.stars.length )];
		wrapper.className = '';
	}, 3000);
};

SpaceMySpace.generate.stars.createStars = function(options) {
	function randomIncrement() { 
		return Math.floor( Math.random() * spread ) 
	};
	function randomSize() { 
		return Math.floor( Math.random() * starSize ) 
	};

	var spread = options.spread;
	var starSize = options.maxStarSize;

	var canvas = document.createElement('canvas');
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

	var ctx = canvas.getContext('2d');
	var x, y;

	for ( x = 0; x < canvas.width; x += randomIncrement() ) {
		for ( y = 0; y < canvas.height; y += randomIncrement() ) {
			ctx.fillStyle = 'rgba(255, 255, 255, ' + Math.random() + ')';
			var randomStarSize = randomSize();
			ctx.fillRect(x, y, randomStarSize, randomStarSize);
		}
	}

	return "url(" + canvas.toDataURL("image/png") + ")";
}