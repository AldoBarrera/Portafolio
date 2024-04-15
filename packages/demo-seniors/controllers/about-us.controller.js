var aboutUsModel = require("../models/about-us");
const highlightWords = (text) => {
    const regex = /{([^{}]*)}/g;
    const parts = text?.split(regex);
    return parts?.map((part, index) => {
      if (index % 2 === 0) {
        return part;
      } else {
        return `<span key={index} className="span">${`{${part}}`}</span>`;
      }
    });
  };
class AboutUsController {    
    constructor () {
        aboutUsModel.Hero.title = highlightWords(aboutUsModel.Hero.title)
    }
    getPage() {
        return aboutUsModel
    }
}
module.exports = AboutUsController;
