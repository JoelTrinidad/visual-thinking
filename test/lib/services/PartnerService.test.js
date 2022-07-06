const PartnerService = require("./../../../lib/services/PartnerService");

describe("Test for PartnerService", () => {
    test("Get a list of the mails of the partners with certification", () => {
        const partners = [{email: "Shields@visualpartnership.xyz", haveCertification: true}, {email: "Kerri@visualpartnership.xyz", haveCertification: false},{email: "Dixon@visualpartnership.xyz", haveCertification: true}];
        const mails = PartnerService.getPartnerMailsWithCertification(partners);
        
        expect(mails).toStrictEqual(["Shields@visualpartnership.xyz", "Dixon@visualpartnership.xyz"]);
    });

    test("Get a list of partners who have credits over 500", () => {
        const partners = [{name: "Tillman", credits: 600}, {name: "Mosley", credits: 529}, {name: "Carolina", credits: 487}, {name: "Monroe", credits: 329}];
        const partnersOver = PartnerService.getPartnersCreditsGreaterThan(partners, 500);
        
        expect(partnersOver).toStrictEqual([{name: "Tillman", credits: 600}, {name: "Mosley", credits: 529}]);
    });
});