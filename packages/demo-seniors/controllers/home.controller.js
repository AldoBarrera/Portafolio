var homeModel = require("../models/home");

class HomeController {    
    constructor () {
    }
    getPage() {
        return homeModel
    }
}
module.exports = HomeController;
