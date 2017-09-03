#Text to MP3
This is a Simple script to generate MP3 from text, using public Google Translate API, so it have the limits of public usage 

[![NPM](https://nodei.co/npm/text-to-mp3.png)](https://nodei.co/npm/text-to-mp3/)


[![npm version](https://badge.fury.io/js/text-to-mp3.svg)](https://badge.fury.io/js/text-to-mp3)
[![Bower version](https://badge.fury.io/bo/text-to-mp3.svg)](http://badge.fury.io/bo/text-to-mp3)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Installation by NPM 

Install this module through npm :

```javascript
npm install --save text-to-mp3
```

## Installation by Bower 

Install this module through bower repository:

```javascript
bower install --save text-to-mp3
```

## Usage

### Get MP3 - callback
```javascript
var txtomp3 = require("text-to-mp3");

txtomp3.getMp3("Ciao Mondo", function(err, binaryStream){
  if(err){
    console.log(err);
    return;
  }
  var file = fs.createWriteStream("FileName.mp3"); // write it down the file
  file.write(binaryStream);
  file.end();
});
```
### Get MP3 - Promise
```javascript
var txtomp3 = require("text-to-mp3");

txtomp3.getMp3("Ciao Mondo").then(function(binaryStream){
  var file = fs.createWriteStream("FileName.mp3"); // write it down the file
  file.write(binaryStream);
  file.end();
})
.catch(function(err){
  console.log("Error", err);
});
```


### Save MP3 - callback
```javascript
var txtomp3 = require("text-to-mp3");

txtomp3.saveMP3("Ciao Mondo", "FileName.mp3", function(err, absoluteFilePath){
  if(err){
    console.log(err);
    return;
  }
  console.log("File saved :", absoluteFilePath); //"File saved : /home/enrico/WebstormProjects/textToMp3/FileName.mp3"
});
```
### Save MP3 - Promise
```javascript
var txtomp3 = require("text-to-mp3");

//if you do not provide a mp3 extension, or you provide it wrong, it will automatically append.
txtomp3.saveMP3("Ciao Mondo", "FileName").then(function(absoluteFilePath){ 
  console.log("File saved :", absoluteFilePath); //"File saved : /home/enrico/WebstormProjects/textToMp3/FileName.mp3"
})
.catch(function(err){
  console.log("Error", err);
});
```

## Bash it


```
git clone https://github.com/enricoaleandri/text-to-mp3.git 
cd text-to-mp3
npm install
node textToMp3.js -t "Texto to generate speech" -f "filenameSpeech.mp3"
```



## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
 
 
## Credits
 
Lead Developer - Enrico Aleandri (@enricoaleandri)
 
## License
 
The MIT License (MIT)

Copyright (c) 2017 Enrico Aleandri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.