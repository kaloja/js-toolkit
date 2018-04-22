/**
 * Boilerplate for module pattern.
 *
 * @return {Object} - The public API object
 */
const plugin = (() => {

	// Variables:
	const api = {};

	// A private method:
	const privateMethod = () => {
		// Add code here...
	}

	// A public method:
	const api.publicMethod = () => {
		privateMethod();
		// Add code here...
	}

	// Return the public API:
	return api;

})();