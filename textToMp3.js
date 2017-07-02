#!/usr/bin/env nodejs
/**
 * Created by enrico on 29/06/17.
 */


var texttomp3 = require("./index");
var fs = require('fs');



var text = "";
var fn = "";




if(process.argv.indexOf("-?")!== -1){
  console.log("TextToMp3 bach use the TextToMp3 library wich use the google translate public API to generate an mp3 with ");
  console.log("-t \t\t\t Provide the Text here with \" arround the text \" ");
  console.log("-f \t\t\t Provide the file name of MP3 you whant generate, otherways it will be generated automatically");
  console.log("");
  return;
}


if(process.argv.indexOf("-t")!== -1)
  text=process.argv[process.argv.indexOf("-t")+1];

if(process.argv.indexOf("-f")!== -1)
  fn=process.argv[process.argv.indexOf("-f")+1];


if(text !== ""){ // just if I have a text I'm gona parse
  texttomp3.parse(text, function(data){
    if(typeof fn !== "undefined"){ // filename available
      if(fn.substring(fn.length-4, fn.length) !== ".mp3"){ // if name is not well formatted, I add the mp3 extention
        fn+=".mp3";
      }
      fs.writeFileSync(fn, data, 'binary');
      fs.close();
      console.log("MP3 SAVED!");
    }
  });
}