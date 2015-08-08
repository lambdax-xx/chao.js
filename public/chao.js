
/*
	World
*/

function World (worldDef, canvas) {
	if (this == window)
		return new World(worldDef)

	this.def = wordDef;

	this.canvas = canvas;

	//this.sence = [Corner, ...]; 

	this.spirits = [];
}

World.prototype.buildSence = function (sencePath) {
	// ...

	this.sence = new Scence(senceDef);
}

function Scence (senceDef)  {

	this.def = senceDef;
}

function Corner () {
	this.lowers = [];
	this.highers = [];
}

/*
	Definations
*/

function WorldDef (ress, scences) {
	this.ress = ress;
	this.scences = hash(scences);

	//this.startScence = startScence;
	//this.spirits = spirits;
}

function Ress (images, tiles, audios) {
	if (this === window)
		return new Ress();

	this.images = hash(images);
	this.tiles = hash(tiles);
	this.audios =  hash(audios);
}

function ScenceDef (name, map, builds, items, spirits, subScences) {
	this.name = name;
	this.map = map;
	this.builds = builds;
	this.itmes = items;
	this.spirits = spirits;

	this.subScences = hash(subScences, function(subScence) {
		subScence.outer = this;
	});	
}

/*
	size: {width: number, height: number}
	cornerSize: {width: 32, height: 32}
	background: image url
	properties: [{ position: { xn, yn}, name: "xxx", value: "xxx"}, ...]
	walls: [{ position: {xn, yn}, walls: O.X}, ...]
	items: [{ position: { xn, yn}, name: "xxx", count: 'number'}, ...]
*/
function MapDef (size, cornerSize, background, walls, properties, items) {
	this.size = size;
	this.cornerSize = cornerSize;
	this.background = background;
	this.walls = walls
	this.properties = properties
	this.items = items
}

function BuildDef (tile) {
	this.tile = tile;
}

function ItemDef () {

}

function SpiritDef () {

}









