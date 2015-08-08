/* Image Resources */

function ImageRes(name, image, options) {
	if (this === window)
		return new ImageRes(name, image, options);

	this.name = name;
	this.image = image;

	var opts = Object.createObject(ImageRes.defaults);
	Utils.assign(opts, options);

	this.options = opts;

	this.width = opts.width;
	this.height = opts.height;
}

ImageRes.defaults = {};

ImageRes.prototype.initialize = function(engine) {
	
	if (!(image instanceof HTMLImageElement)) {
		throw new Error('The "image" argument must an <img> element.');
	}

	this.isLoad = true;
}

ImageRes.prototype.render = function (ctx, offsetx, offsety, width, height) {
	ctx.drawImage(this.image, offsetx, offsety, width, height, 0, 0, width, height);
}
