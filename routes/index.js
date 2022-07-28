var express = require('express');
var router = express.Router();
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null,'uploads');
  },
  filename: function (req,file,cb){
    cb(null,Date.now()+Math.random()+file.originalname);
  }
})
var upload = multer({
  dest: 'uploads/',
  limit: {fileSize:2* 1024* 1024}
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  router.post('/upload',upload.single('file'),function (req,res){
    var mota = req.body.mota;
    var tieude = req.body.tieude;
    var file = req.file.originalname;

    res.send('Tieu de: ' +tieude  +  'Mo ta: '  +mota+  'File upload:' +file+ '')
  })
module.exports = router;
