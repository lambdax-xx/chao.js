/* Map */

function Map(name, width, height, base, background, foreground, options) {
	if (this == window)
		return new Map(name, size, background, foreground, options);

	this.name = name;
	this.width = width;
	this.height = height;
	this.base = base;
	this.background = background;
	this.foreground = foreground;
}

Map.defaults = {
	cornerWidth : 32,
	cornerHeight : 32,
}



