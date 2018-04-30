
var express = require("express");



var router = express.Router();

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});


////////////////////////////////////////////////////
const myDatabase = require('./myDatabase');

let db = new myDatabase();


router.get('/read', function(req, res){
	db.getAllObjects(res);

});

router.get('/read/:ident', function(req, res){
	 db.getObjectWithID(res,req.params.ident);


});

//add or modify.  Use addObject and no need for index.
//                ident should be part of object.
router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}
db.addObject(res,{ident:req.body.ident,name:req.body.name});


//	let obj = {ident:req.body.ident,name:req.body.name};
//	res.json(db.addObject(obj));


});

//add or modify.  Use changeObject and no need for index.
//                ident should be part of object.
router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}
	db.changeObject(res,req.body.ident,req.body.name);
});

//add or modify.  Use deleteObjectWithID and change index to ident.
router.delete('/delete/:ident', function(req, res){
	db.deleteObjectWithID(res,req.params.ident);


//	res.json(db.deleteObjectWithID(req.params.ident));
});




module.exports = router;
