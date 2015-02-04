var express = require('express');
var router = express.Router();


var pjaxFilter = function(req, res, next) {
  if (req.get('X-PJAX')) {
    next();
    return;
  }
  //如果不是pjax请求的话直接返回布局模板
  res.render('layout', { title: 'Pjax simple demo' });
};

router.get('/', pjaxFilter, function(req, res) {
  res.render('index');
});

router.get('/poem/:id', pjaxFilter, function(req, res) {
  var poemId = req.params.id;
  res.render('poem/' + poemId);
})

module.exports = router;
