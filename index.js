var express = require('express')
area = require('./area'),
app = express(),
port = process.env.PORT || 8080;


app.get('/getArea', function(req, res){
    var lato1 = parseInt(req.query.side1);
    var lato2 = parseInt(req.query.side2);

    var risultato = area([lato1,lato2]);

    if(risultato == -1){
        res.status(400).json({"area": risultato});
    }else{
        res.json({"area": risultato});
    }    
});

app.listen(port);