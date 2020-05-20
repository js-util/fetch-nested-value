/**
 * Given an object and fetch
 * @param {Object} obj 
 * @param {Array<String> | String} path
 * @param {Object} fallback value
 */
function fetchNestedValue(obj, path, fallback = null) {
	// Fallback if object is null
	if( obj == null ) {
		return fallback;
	}
	
	// Convert path to array
	if(!Array.isArray(path)) {
		return fetchNestedValue(obj, path.toString().split("."));
	}

	// Get the first element, and remove it from the path array
	const key = path.shift();

	// Get the key value
	const val = obj[key];

	// If value is null, terminate and return fallback
	if( val === null ) {
		return fallback;
	}

	// Recusively call if needed
	if( path.length > 0 ) {
		return fetchNestedValue(val, path);
	}

	// Return the value
	return val;
}

// Export the function
module.exports = fetchNestedValue;