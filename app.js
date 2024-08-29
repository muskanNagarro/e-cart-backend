const express = require('express'); 
const cors = require('cors');
const yenv = require('yenv')

const app = express();           
const port = 8080;                  

var mysql = require('mysql');
const env = yenv('env.yaml', { env: 'production' })

console.log(env.PORT)
var con = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  port: env.DB_PORT,
  password: env.DB_PASS,
  database: env.DB_NAME
});

app.use(cors({
    allowedOrigins: '*'
}));

// var productsFile = require("./data.json"); 
app.get('/getProducts', (req, res) => {       
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM products", function (err, result, fields) {
      console.log(result);
      res.send(result);
    });
  })
});

app.listen(port, () => {           
    console.log(`Now listening on port ${port}`);
});
