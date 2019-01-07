var AipOcr = require('./src/index').ocr;
var fs = require('fs');
var http = require('http');

//设置APPID/AK/SK（前往百度云控制台创建应用后获取相关数据）
var APP_ID = "15359898";
var API_KEY = "Mybwpkfy50pIK9nqRvEPc6jG";
var SECRET_KEY = "MbcedCabbQOyeTbQYi6M6T3GG2f7msMR";

var client = new AipOcr(APP_ID, API_KEY, SECRET_KEY);

var image = fs.readFileSync('assets/333.png');

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    var base64Img = new Buffer(image).toString('base64');
    client.generalBasic(base64Img).then(function (result) {
        res.end(JSON.stringify(result));
    });
});

app.listen('8000', function () {
    console.log('listening on 8000');
});