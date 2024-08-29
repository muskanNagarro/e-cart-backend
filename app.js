const express = require('express'); 
const cors = require('cors');
const fs = require('fs');

const app = express();           
const port = 8080;                  

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "awseb-e-bameshx58q-stack-awsebrdsdatabase-vhwjiyhkxjqo.crgi842s426u.eu-central-1.rds.amazonaws.com",
  user: "ebroot",
  port: 3306,
  password: db_pass,
  database: "ebdb"
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
