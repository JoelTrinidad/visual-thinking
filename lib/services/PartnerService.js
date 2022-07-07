class PartnerService {
    /**
     * Get email of partners with certification 
     * 
     * @param {object[]} partners - List of partners
     * @param {boolean} partners[].haveCertification - Certificacion value 
     * @param {string} partners[].email - Partner email 
     * 
     * @return email list
     */
    static getPartnerMailsWithCertification(partners){
        const emails = partners.filter(partner => partner.haveCertification)
            .map(partner => partner.email);
        return emails;
    }

    /**
     * Get partners who have credits over number given
     * 
     * @param {Object[]} partners - List of partners
     * @param {number} partners[].credits - Credits of partners
     * @param {number} credits - Credits to be passed
     * 
     * @return - Partners with enough credits
     */
    static getPartnersCreditsGreaterThan(partners, credits){
        const partnersWithEnoughCredits = partners.filter(partner => partner.credits > credits);
        return partnersWithEnoughCredits;
    }
}

module.exports = PartnerService;