// author: Gabe Rojas-Westall (GitHub: rojaswestall)
// Messing around with the gdax api
var Gdax = require('gdax');
var Config = require('./config.js');


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
var accounts = function(err, response, data) {
	console.log('Below is the data that getAccount is giving through the private endpoint:');
	console.log(data[1].currency);
	// console.log('This is the repsonse:');
	// console.log(response);
  
};

authedClient.getAccounts(accounts);

var callback = function(err, response, data) {
	console.log('getProductTicker is using the public endpoint and giving us info about eth:');
	//console.log(response)
	console.log(data);
	// console.log(data.price);
  
};

publicClientETH.getProductOrderBook(callback);

