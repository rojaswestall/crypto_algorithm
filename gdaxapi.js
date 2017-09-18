// author: Gabe Rojas-Westall (GitHub: rojaswestall)

// Other modules
var async = require('async');
// import parallel from 'async/parallel';

// The gdax node module
var Gdax = require('gdax');

// Configuration for trading account - DO NOT SHARE THIS INFO!
var Config = require('./grwsandboxconfig.js');

// Public endpoints from the gdax api
var ETH = new Gdax.PublicClient('ETH-USD', 'https://api.gdax.com');
var BTC = new Gdax.PublicClient('BTC-USD', 'https://api.gdax.com');
var LTC = new Gdax.PublicClient('LTC-USD', 'https://api.gdax.com');

// Private enpoints
var key = Config.key;
var b64secret = Config.b64secret;
var passphrase = Config.passphrase;
var btcaddress = Config.btcaddress;

var apiURI = 'https://api.gdax.com';
var sandboxURI = 'https://api-public.sandbox.gdax.com';

var gdaxAccount = new Gdax.AuthenticatedClient(key, b64secret, passphrase, sandboxURI);



var LTCOrders = function(err, response, data) {
	// [inexing starting from 50 orders away from ticker] [1) Access Price  2) Volume  3) Number of Orders]
	console.log(data.bids);

	// Add volumes for both ask and bids 
	var totalVolumeBids = 0;
	var totalVolumeAsks = 0;
	var largestJumpBids = [0, 0, 0];
	for (var i = 0; i < 50; i++) {
		if (i != 0 && data.bids[i][2] > largestJumpBids[2]) {
			largestJumpBids = data.bids[i];
			console.log(largestJumpBids);
		}
		totalVolumeBids = totalVolumeBids + data.bids[i][2];
		totalVolumeAsks = totalVolumeAsks + data.asks[i][2];
	}
	
	console.log('Ask Volume: ' + totalVolumeAsks.toString());
	console.log('Bid Volume: ' + totalVolumeBids.toString());
	console.log(largestJumpBids);
};





LTC.getProductOrderBook({'level': 2}, LTCOrders);

