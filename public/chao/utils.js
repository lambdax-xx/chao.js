/* Utils */

Utils = {
	/* Assigns own properties of obj to o. */
	assign: function(o, obj) {
		if (!obj)
			return o;

		if ((typeof obj === 'object' || typeof obj === 'function') && 
			(typeof o === 'object' || typeof o === 'function')) {
			for (var n in obj) {
				if (obj.hasOwnProperty(n))
					o[n] = obj[n]; 
			}
		}
		return o;
	},

	function hashByName(array, handler) {
		var hash = {};

		if (array) {
			for (var i = 0; i < array.length; i++) {
				hash[array[i].name] = array[i];
			if (handler)
				handler(array[i]);
			}
		}

		return hash;
	},

}

