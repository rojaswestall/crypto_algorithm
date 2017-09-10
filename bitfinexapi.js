var request = require('request')

var url = 'https://api.bitfinex.com/v1';

var bitfinexPriceList = {
	'BTC': 0,
	'ETH': 0,
	'LTC': 0,
	'NEO': 0,
}

setPrices(function(msg) {
	// bitfinexPriceList.coin = price;
	console.log(msg);
	console.log(bitfinexPriceList);
	
});

function setPrices(callback) {
	request.get(url + "/pubticker/btcusd", function(error, response, body) {
  		if (error) {
  			console.log(error);
  		}
  		var btcPrice = JSON.parse(body).last_price;
  		bitfinexPriceList.BTC = btcPrice;

    	request.get(url + "/pubticker/ethusd", function(error, response, body) {
  			if (error) {
  				console.log(error);
  			}
	  		var ethPrice = JSON.parse(body).last_price;
	  		bitfinexPriceList.ETH = ethPrice;

		  	request.get(url + "/pubticker/ltcusd", function(error, response, body) {
		  		if (error) {
		  			console.log(error);
		  		}
			  	var ltcPrice = JSON.parse(body).last_price;
			  	bitfinexPriceList.LTC = ltcPrice;

			  	request.get(url + "/pubticker/neousd", function(error, response, body) {
			  		if (error) {
			  			console.log(error);
			  		}
				  	var neoPrice = JSON.parse(body).last_price;
				  	bitfinexPriceList.NEO = neoPrice;	
				  	setTimeout(function() {
			        	callback('From Callback Method');
			    	}, 0);	  		
				})		  		
			})
		})
	})
};





///// Trying to do the same thing with promises
var getBitcoinPrice = new Promise(function(resolve,reject){
	request.get(url + "/pubticker/btcusd", function(error, response, body) {
  		if (error) {
  			reject(error);
  		}
  		else {
  			var btcPrice = JSON.parse(body).last_price;
  			resolve(btcPrice);
  		}
	})
});

getBitcoinPrice.then(function(btcPrice){
	bitfinexPriceList.BTC = btcPrice;
	console.log('From Promise');
	console.log(bitfinexPriceList);
}).catch(function(error){
	console.log(error);
})

// promise.then(function(result) {
//   console.log(result); // "Stuff worked!"
// }, function(err) {
//   console.log(err); // Error: "It broke"
// });

















