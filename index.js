"use strict";

var DEBUGNAME = __filename.slice(__dirname.length + 1, -3);
var debug = require("debug")(DEBUGNAME);

var TextToMp3 = function () {

  /**
   *
   * @type {{ie: string Cherset of text we are providing,
    * client: string this must be tw-ob otherways google API will fail the call,
     * tl: string this is the language of generated speech}}
   */
  TextToMp3.prototype.attributes = {
    ie: "UTF-8",
    client : "tw-ob",
    tl : "It-it"
  };

  TextToMp3.prototype.parse = function (text, callback) {

    if(typeof text === "undefined" || text === "" || typeof callback === "undefined"){
      console.log("missing required params");
      return;
    }

    var fs = require('fs'),
      request = require('request');

    var path = "http://translate.google.com/translate_tts?";
    var keysAtt = Object.keys(this.attributes);
    for(var i = 0; i< keysAtt.length ; i++){
      path += keysAtt[i] + "=" + this.attributes[keysAtt[i]]+"&";
    }
    path += "q="+text+"&";
    path += "textLen="+text.length;

    debug("PATH", path);
    var data = [];
    request
      .get({
        headers: {
          "Accept-Encoding" : "identity;q=1, *;q=0",
          "Range" : "bytes=0-"
        },
        uri: path,
        method: 'GET'
      })
      .on('data',function(chunk){
        data.push(chunk);
      })
      .on('end',function(){
        if(data)
          callback(null, Buffer.concat(data));
        else
          callback("no data found");
      })
      .on('error', function(err) {
        // handle error
        callback(err, null)
      })

  };
};
module.exports = new TextToMp3();
