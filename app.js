var express = require('express');

var multer = require('multer');

//creating instance
var myapp = express();

var path = require('path');

var bodyParser = require('body-parser');

myapp.use(bodyParser.json());	
myapp.use(bodyParser.urlencoded({extended:true}));

myapp.use(express.static(
	path.join(__dirname, '/public')
	));

// folder where view files are kept
myapp.set('views', __dirname+'/views');

// set the view engine to ejs
myapp.set('view engine', 'ejs');

myapp.get('/',function(req,res){
	res.render('index', {message:''});
});

		// multer	
var mystorage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null,'public/images')
	},
	filename : function(req,file,cb){
		var name = file.originalname;
		cb(null,name);	
	}
	});
var upload = multer({storage: mystorage});	
myapp.post('/UploadPhoto',upload.single('UploadPhoto'),function(req,res){
	res.send({'success': 'Success'});
});
// listen port
myapp.listen(3000);
