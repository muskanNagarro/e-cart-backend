const express = require('express'); 
const cors = require('cors');
const fs = require('fs');

const app = express();           
const port = 8080;                  

app.use(cors({
    allowedOrigins: '*'
}));

var productsFile = require("./data.json"); 
app.get('/getProducts', (req, res) => {       
    res.json(productsFile);
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/getCartData', (req, res) => {       
    res.sendFile('C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/cart.json');
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.get('/getOrderData', (req, res) => {       
    res.sendFile('C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/order.json');
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});


app.listen(port, () => {           
    console.log(`Now listening on port ${port}`);
});

// need to work 
app.post('http://localhost:5000/setCartData', function (req, res) {
    const body = req.body.Body
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${body} to Express`)
    fs.writeFile("C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/cart.json", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/cart.json", "utf8"));
        }
      });
    // res.sendFile('src/index.html');      //server responds by sending the index.html file to the client's browser
})
// need to work 
app.post('http://localhost:5000/setOrderData', function (req, res) {
    const body = req.body.Body
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${body} to Express`)
    fs.writeFile("C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/order.json", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("C:/Users/muskanjain01/OneDrive - Nagarro/Desktop/e-cart/backend/order.json", "utf8"));
        }
      });
    // res.sendFile('src/index.html');      //server responds by sending the index.html file to the client's browser
})