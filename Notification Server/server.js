var cors = require("cors");
var express = require("express");
var app = express();

var http = require("http");
var io = require("socket.io")(http);
const port = 3000;


// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET');

//     next();
// })

app.use(cors());
app.get("/",(req,res)=>{

        console.log("connection successfully established");
    
        io.on("connection", function(socket){
            console.log("Auth value: "+ socket.id );
        
            socket.on("sendNotification",function(details){
                socket.broadcast.emit("sendNotification",details);
            })
        })

        res.send("response from get")
    
}
)



app.listen(port,()=>{
    console.log("server established successfully!!!"+port)
})


// var cors = require("cors");
// var express = require("express");
// var app = express();

// var http = require("http").createServer(app,cors);

// var io = require("socket.io")(http);

// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET');

//     next();
// })

// http.createServer(function (req, res) {
//     // add a HTTP header:
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.writeHead('Access-Control-Allow-Origin','*');
//     res.writ('Access-Control-Allow-Methods','GET');
//     // res.write('Hello World!');
//     io.on("connection", function(socket){
//                 console.log("Auth value: "+ socket.id );
            
//                 socket.on("sendNotification",function(details){
//                     socket.broadcast.emit("sendNotification",details);
//                 })
//             })
//     res.end();
//   }).listen(3000);

// http.listen(3000, function(){
//     console.log("connection successfully established");

//     io.on("connection", function(socket){
//         console.log("Auth value: "+ socket.id );
    
//         socket.on("sendNotification",function(details){
//             socket.broadcast.emit("sendNotification",details);
//         })
//     })
// })