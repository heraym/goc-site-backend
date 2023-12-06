const http = require('http');
const port = process.env.PORT || 8080; 
 
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const cors = require('cors');
data = require("./data");

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var path = require('path');


const server = http.createServer(app);

app.get('/', function(req,res,next) {
        res.send("OK"); 
}); 

app.get('/equipos', async function(req,res,next) {
    equipos = await data.getEquipos();
    res.send(JSON.stringify(equipos));	 
}); 


server.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
});
