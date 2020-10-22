var bodyParsers = require('body-parser');

var data=[{item:'Shirt'},{item:'T-Shirt'},{item:'Top'},{item:'Long Pants'},{item:'Half Pants'},{item:'Shorts'}];
var urlencodedParser = bodyParsers.urlencoded({extended:false});
module.exports = function(app){
    app.get("/product",function(req,res){
        res.render('product',{product:data});
    });
    app.post('/product',urlencodedParser,function(req,res){
        data.push(req.body);
        res.render('product',{product:data});
    });
    app.delete('/product/:item',function(req,res){
        data= data.filter(function(list){
            return list.item.replace(/ /g,"-")!==req.params.item;
        });
        res.render('product',{product:data});
    });
    app.get("/cart",function(req,res){
        res.render('cart',{cart:data});
    });
};