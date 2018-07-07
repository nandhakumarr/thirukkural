var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            title: $("h1").text();
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://thirukkural.gokulnath.com/#/thirukkuralchapters/1/thirukkurals');