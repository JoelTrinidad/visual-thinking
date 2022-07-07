const Reader = require("../utils/Reader");
const PartnerService = require("../services/PartnerService");

class PartnerController {
    /**
     * Get a list with all the partners
     * 
     * @returns - A list with all the partners
     */
    static getPartners(){
        return Reader.readJsonFile("visualpartners.json");
    }

    /**
     * Get a list with all the partners mails with certification
     * 
     * @returns - A list with emails
     */
    static getPartnerMailsWithCertification(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.getPartnerMailsWithCertification(partners);        
    }

    /**
     * Get a lis of partners with credits over a given number
     * 
     * @param {number} minimumCredits - expected minimum credits 
     * @returns - List of partners 
     */
    static getPartnersCreditsGreaterThan(minimumCredits){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.getPartnersCreditsGreaterThan(partners, minimumCredits);        
    }
}

module.exports = PartnerController;