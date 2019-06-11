var osmosis = require('osmosis');
 
osmosis
.get('https://cleveland.craigslist.org/d/free-stuff/search/zip')
.find('.result-row')
.set({'Item': '.rows .result-row p a'})
.data(function(data) {
    console.log(data);
})

//osmosis
.get('https://cleveland.craigslist.org/search/waa')
.find('.result-info')
.set({'Want' : ['.result-price a']})
.data(function(data) {
    console.log(data);
})