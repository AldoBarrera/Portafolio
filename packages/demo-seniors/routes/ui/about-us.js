var express = require('express');
var router = express.Router();
var AboutUsController = require("../../controllers/about-us.controller");
let aboutUsController = new AboutUsController();

router.get('/about-us', async (req, res, next) => {
    try {
      const page = await aboutUsController.getPage();
      res.render('about-us', { data: page })
    } catch (e) {
      res.render('fail', { message: e })
    }
  });


module.exports = router;
