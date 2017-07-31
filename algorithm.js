// author: Gabe Rojas-Westall (GitHub: rojaswestall)
// Messing around with the gdax api
var Gdax = require('gdax');
var Config = require('./grwsandboxconfig.js');


// Public endpoints from the gdax api
var publicClientETH = new Gdax.PublicClient('ETH-USD', 'https://api.gdax.com');
var publicClientBTC = new Gdax.PublicClient('BTC-USD', 'https://api.gdax.com');

var key = Config.key;
var b64secret = Config.b64secret;
var passphrase = Config.passphrase;
var btcaddress = Config.btcaddress;

var apiURI = 'https://api.gdax.com';
var sandboxURI = 'https://api-public.sandbox.gdax.com';

// Private enpoints
var authedClient = new Gdax.AuthenticatedClient(key, b64secret, passphrase, sandboxURI);
// var authedClient = new Gdax.AuthenticatedClient(key, b64secret, passphrase, apiURI);

// All API methods are callback based. 
// This callback will be passed directly to the underlying request library's request method. 
// err will be either null or an Error. 
// response will be a generic HTTP response abstraction created by the request library. 
// data will be the result of JSON-decoding the server's response, or null if the response was not parseable.
// var callback = function(err, response, data) {
// 
// };

////////////// NEED TO WRITE ERROR HANDLERS //////////////
// 400	Bad Request – Invalid request format
// 401	Unauthorized – Invalid API Key
// 403	Forbidden – You do not have access to the requested resource
// 404	Not Found
// 500	Internal Server Error – We had a problem with our server

var accounts = function(err, response, data) {
	console.log('Balance - bitcoin wallet:');
	// console.log(data);
	console.log(data[0].balance);
	// console.log('This is the repsonse:');
	// console.log(response);
  
};
authedClient.getAccounts(accounts);


var orderbook = function(err, response, data) {
	console.log('Order book ETH-USD:');
	//console.log(response)
	// console.log(data);
	// console.log(data.price);
  
};
publicClientETH.getProductOrderBook({'level' : 3}, orderbook);
// Level 3 is only recommended for users wishing to maintain a full real-time order book using the 
// websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.

var ethticker = function(err, response, data) {
	console.log('eth ticker:')
	console.log(data);
};
publicClientETH.getProductTicker(ethticker);
// Snapshot information about the last trade (tick), best bid/ask and 24h volume.

var ethtrades = function(err, response, data) {
	console.log('eth trades:')
	console.log(data);
	console.log(response)
};
publicClientETH.getProductTrades(ethtrades);
// The trade side indicates the maker order side. The maker order is the order that was open on the 
// order book. buy side indicates a down-tick because the maker was a buy order and their order was 
// removed. Conversely, sell side indicates an up-tick.































