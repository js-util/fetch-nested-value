# fetch-nested-value

Fetch nested value within an object, using a dot notation string, eg: "hello.world"

# npm install

```.bash
npm install --save @js-util/fetch-nested-value
```

# Example usage

```.js
// Importing the module
const fetchNestedValue = require("fetch-nested-value");

// Example object to fetch from
const obj = {
	"hello": {
		"world" : "its ok!"
	}
};

// This fetches and return a nested value
fetchNestedValue( obj, "hello.world" ); // > "its ok!"
```
