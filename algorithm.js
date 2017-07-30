// author: Gabe Rojas-Westall (GitHub: rojaswestall)
// Messing around with the gdax api


// For now, using the public endpoints from the gdax api
var Gdax = require('gdax');
var publicClient = new Gdax.PublicClient('ETH-USD', 'https://api.gdax.com');

// All API methods are callback based. 
// This callback will be passed directly to the underlying request library's request method. 
// err will be either null or an Error. 
// response will be a generic HTTP response abstraction created by the request library. 
// data will be the result of JSON-decoding the server's response, or null if the response was not parseable.
var callback = function(err, response, data) {
	console.log('getProductTicker is using the callback')
	console.log(response)
  
};

publicClient.getProductTicker(callback);
