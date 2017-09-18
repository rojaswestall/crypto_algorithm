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

// var displayAccounts = function(err, response, data) {
// 	console.log('Accounts:');
// 	console.log(data);
// 	// console.log(data[0].balance);
// 	// console.log('This is the repsonse:');
// 	// console.log(response);
  
// };

// var displayUSDAccount = function(err, response, data) {
// 	console.log('USD Account:')
// 	console.log(data[1]);
// };

// var displayBTCAccount = function(err, response, data) {
// 	console.log('BTC Account:')
// 	console.log(data[0]);
// };

// grwgdax.getAccounts(displayAccounts);
// grwgdax.getAccounts(displayUSDAccount);
// grwgdax.getAccounts(displayBTCAccount);




// var monitorOrder = function(err, response, data) {

// };

// var justBought = function(err, response, data) {

// };






// var tradePrices = function(err, response, data) {
// 	console.log(data);
// 	for (var i = 0; i < data.length; i++) { 
//    		console.log(data[i].price);
// 	}

// };

// BTC.getProductTrades(tradePrices);

// var getDirection = function(coinToBuy) {
// 	coinToBuy.getProductTrades(tradePrices);

// };

// var getLastBid = function(err, response, data) {
// 	//should be passed to getProductTicker. It expects a ticker.
// 	var bid = data[0].bid;
// 	return bid;
// };

// var getBuyParameters = function(usd, coinToBuy, direction) {
// 	var currentBid = coinToBuy.getProductTicker(getLastBid);


// 	var size = usd / bid;


// 	const buyParams = {

// 		'price': ,
// 		'size': size.toString(),
// 		'product_id': '',
// 	};

// 	return buyParams;
// }

// // This will look at the history of trades in the last 50 trades and look at whether the trend is going up or down.
// // It will then place a buy order either directly above or below the price.
// var BuyCoinAsMaker = function(usdAmount, coinToBuy) {
// 	var direction = getDirection(coinToBuy);

// 	var buyParams = getBuyParameters(usdAmount, coinToBuy, direction);
// 	// Buy 1 BTC @ 100 USD
// 	const buyParams = {
//   		'price': , // USD // Want to be right below the last bid price given by the ticker
//   		'size': ,  // BTC
//   		'product_id': 'BTC-USD',
// 	};

// 	gdaxAccount.buy(buyParams, callback);

// }




// PROMISES AND CALLBACKS
// MAKE TRADE TO SANDBOX
// GET ANOTHER EXCHANGE API

////// MANUALLY TRADING TO SEE WHAT HAPPENS //////



///////////////////////////////////////////////////////////
////////////// Make trade to the gdax sandbox /////////////
///////////////////////////////////////////////////////////

//// SELL BTC ////
var wtfHappensWhenYouTrade = function(err, response, data) {
	if (err) {
		console.log(err);
	}
	console.log(data)
};

var buyBitcoin = function(err, response, data) {
	var price = data.price / 2;
	console.log(price);


	const buyParams = {
  		'price': price, // USD // Want to be right below the last bid price given by the ticker
  		'size': '1' ,  // BTC
  		'product_id': 'BTC-USD',
	};

	gdaxAccount.buy(buyParams, wtfHappensWhenYouTrade);

};

BTC.getProductTicker(buyBitcoin); // TO PLACE THE BUY ORDER
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


//// SELL BTC ////
var sellBitcoin = function(err, response, data) {
//handle error
var price = data.price;
console.log(data);

const sellParams = {
'price': price,
'size' : '1' ,
'product_id': 'BTC-USD',
}

gdaxAccoint.sell(sellParams, wtfHappensWhenYouTrade);
};

// BTC.getProductTicker(sellBitcoin)
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



// var orderNotFilled = true;
// while (orderNotFilled) {

// }




// async.parallel({
//     // one: function(callback) {
//     //     setTimeout(function() {
//     //         callback(null, 'one');
//     //     }, 100); //Wait 100 milliseconds
//     // },
//     one: function(callback){ BTC.getProductTicker(callback); },
//     // two: function(callback) {
//     //     setTimeout(function() {
//     //         callback(null, 'two');
//     //     }, 100);
//     // }
// },
// optional callback
// function(err, response) {
// 	// console.log(response);
// 	console.log(response);
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
// });







// Sell 1 BTC @ 110 USD
// const sellParams = {
//   'price': '110.00', // USD
//   'size': '1', // BTC
//   'product_id': 'BTC-USD',
// };
// authedClient.sell(sellParams, callback);











// var orderbook = function(err, response, data) {
// 	console.log('Order book BTC-USD:');
// 	//console.log(response)
//  console.log(data);
// 	// console.log(data.price);
  
// };
// BTC.getProductOrderBook({'level' : 3}, orderbook);
// Level 3 is only recommended for users wishing to maintain a full real-time order book using the 
// websocket stream. Abuse of Level 3 via polling will cause your access to be limited or blocked.




// var btcticker = function(err, response, data) {
// 	console.log('btc ticker:')
// 	console.log(data);
// };
// BTC.getProductTicker(btcticker);
// Snapshot information about the last trade (tick), best bid/ask and 24h volume.
// Returns:
// btc ticker:
// { trade_id: 20380228,
//   price: '4497.00000000',
//   size: '0.00015527',
//   bid: '4496.99',
//   ask: '4497',
//   volume: '16139.81416211',
//   time: '2017-09-06T03:01:45.379000Z' }



// var btctrades = function(err, response, data) {
// 	console.log('btc trades:')
// 	console.log(data);
// };
// BTC.getProductTrades(btctrades);
// The trade side indicates the maker order side. The maker order is the order that was open on the 
// order book. buy side indicates a down-tick because the maker was a buy order and their order was 
// removed. Conversely, sell side indicates an up-tick.






////// ARBITRAGE LOGIC ///////

// 1. See low price on market A and high Price on market B

// 2. 































