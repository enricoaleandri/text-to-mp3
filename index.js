"use strict";

var DEBUGNAME = __filename.slice(__dirname.length + 1, -3);
var debug = require("debug")(DEBUGNAME);

var TextToMp3 = function () {

  TextToMp3.prototype.attributes = {};

  TextToMp3.prototype.parse = function (text, callback) {

    if(typeof text === "undefined" || text === "" || typeof callback === "undefined"){
      console.log("missing required params");
      return;
    }

    var fs = require('fs'),
      request = require('request');

    var path = "http://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=It-it";
    path += "&q="+text;
    path += "&textLen="+text.length;

    debug("PATH", path);
    request
      .get({
        headers: {
          "Accept-Encoding" : "identity;q=1, *;q=0",
          "Range" : "bytes=0-"
        },
        uri: path,
        method: 'GET'
      }
      ,
        function (error, response, body) {
          if(error){
            console.error(error);
          }
          if(response && response.statusCode == 200){
            callback(body)
          }
      })
      .on('error', function(err) {
        // handle error
        console.log(err);
      });
  };
};
module.exports = new TextToMp3();
