# SpaceMySpace
### Give a web page a living, breathing, dynamically generated, space background. 
Using the canvas element, a space gradient, randomly generated stars, and a mysterious space glow (is that a real thing?) are drawn onto your page's background. Currently only works on the body. See it live at [tarikhamilton.com](http://tarikhamilton.com).

## Installation / How to Use

```html
	<!-- put this in your <head> tag -->
	<link rel="stylesheet" type="text/css" href="space-my-space.css">

	<!-- put this at the bottom of your <body> tag -->
	<!-- Uncomment jQuery, if needed. -->
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> -->
	<script type="text/javascript" src="space-my-space.js"></script>
	<script>
		SpaceMySpace.draw('body');
	</script>
```