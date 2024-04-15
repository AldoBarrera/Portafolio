var express = require('express');
var router = express.Router();
var HomeController = require("../../controllers/home.controller");
let homeController = new HomeController();

router.get('/', async (req, res, next) => {
    try {
      const page = await homeController.getPage();
      res.render('home', { data: page })
    } catch (e) {
      res.render('fail', { message: e })
    }
  });


module.exports = router;
