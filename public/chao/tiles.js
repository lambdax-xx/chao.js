/* Tiles */

function Tiles(name, res, options) {
	if (this == window)
		return new TileRes(name, image, options);

	this.name = name;
	this.res = res;

	var opts = Object.create(TileRes.defaults);
	Utils.assign(opts, options);
	this.options = opts;
}

TilesRes.defaults = {
	tileWidth : 32,
	tileHeight : 32,
}

Tiles.prototype.initialize = function (engine) {
	var opts = this.options;
	var image = engine.imageRess[this.res];

	if (!image) {
		throw new Error('Can not find image resource: ' + this.res);
	}

	var tilesH = Number(opts.tilesH);
	if (isNaN(tilesH)) {
		tilesH = Math.trunc(image.width / this.options.tileSize.width) 
	}
	var tiles = Number(opts.tiles);
	if (isNaN(tiles)) {
		tiles = Math.trunc(image.height / this.options.tileSize.height) * tilesH;
	}
	this.tilesH = tilesH;
	this.tiles = tiles;

	this.tileNames = opts.tilesNames || {};

	this.image = image;
}

TilesRes.prototype.render = function(ctx, tile) {
	var index = tile;

	while (Number.isNaN(index)) {
		index = this.tileNames[index];
		if (index === undefined)
			throw new Error('Invalid "tile" : ' + tile);
	}

	if (index < 0 || index > this.tiles)
		throw new Error('Index (' + index + ') out of range : 0 - ' + this.tiles);

	var offsetX = index % this.tilesH * this.options.tileWidth;
	var offsetY = Math.trunc(index / this.tilesH) * this.options.tileHeight;

	this.image.render(ctx, offsetx, offsetx, this.options.tileWidth, this.options.tileHeight);
}

/* tile */

function Tile(name, tiles, options) {

}

Tile.defaults = {
}

Tiles.prototype.initialize = function (engine) {

}

Tile.prototype.render = function (ctx) {

}
