const Reader = require("../utils/Reader");

class PartnerController {
    static getPartners(){
        return Reader.readJsonFile("visualpartners.json");
    }
}

module.exports = PartnerController;