class PartnerService {
    /**Get email of partners with certification 
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
}

module.exports = PartnerService;