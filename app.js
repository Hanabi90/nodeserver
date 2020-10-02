var AipOcr = require('./src/index').ocr;
var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var urlencode = require('urlencode');
const bodyParser = require('body-parser');

//设置APPID/AK/SK（前往百度云控制台创建应用后获取相关数据）
var APP_ID = "15359898";
var API_KEY = "Mybwpkfy50pIK9nqRvEPc6jG";
var SECRET_KEY = "MbcedCabbQOyeTbQYi6M6T3GG2f7msMR";

var client = new AipOcr(APP_ID, API_KEY, SECRET_KEY);

// var image = fs.readFileSync('assets/333.png');

var app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/*','Access-Control-Allow-Origin': '*'});
    var pathname = url.parse(req.url, true).pathname;
    if (pathname == '/zidian') {
        var chunks = []; //用于保存网络请求不断加载传输的缓冲数据
    　　 var size = 0;
        req.on('data', function (chunk) {
            chunks.push(chunk);　 //在进行网络请求时，会不断接收到数据(数据不是一次性获取到的)
            size += chunk.length;　
        });
    
        req.on('end', function () {
            console.log(chunk)
    //         var data = Buffer.concat(chunks, size);　　//Buffer.concat将chunks数组中的缓冲数据拼接起来，返回一个新的Buffer对象赋值给data
    // 　　　　var base64Img = data.toString('base64');
    //         console.log(base64Img)
            // var image = fs.readFileSync(body);
            // var base64Img = new Buffer(image).toString('base64');
            // let str = urlencode(body)
            // console.log(str)
            // prefix = "data:" + type + ";base64,";
            // base64 = new Buffer(body, 'binary').toString('base64');
            // this.body = prefix + base64;
            // console.log(base64str);
            // var base64Data = body.replace(/^data:image\/\w+;base64,/, "");
            // var myBody = querystring.parse(body); //querystring.parse将post解析为真正的POST请求格式
            // var base64Img = new Buffer(base64Data).toString('base64');
            client.generalBasic(base64Img).then(function (result) {
                // res.end(JSON.stringify(result));
                res.write(JSON.stringify(result));
                res.end();
            });
        })
    }
    
});


app.listen('8000', function () {
    console.log('listening on 8000');
}); 