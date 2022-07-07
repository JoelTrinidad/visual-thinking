const PartnerController = require("../../../lib/controllers/PartnerController");

describe("Test for PartnerController", () => {
    test("Get all the partners", () => {
        const partners = PartnerController.getPartners();

        expect(partners).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: "Taylor" }),
                expect.objectContaining({ email: "Nikki@visualpartnership.xyz" }),
                expect.objectContaining({ credits: 329 }),
            ])
        );
    });

    test("Get a list of the mails of the partners with certification", () => {
        const partners = [{email: "Shields@visualpartnership.xyz", haveCertification: true}, {email: "Kerri@visualpartnership.xyz", haveCertification: false},{email: "Dixon@visualpartnership.xyz", haveCertification: true}];
        const mails = PartnerController.getPartnerMailsWithCertification(partners);
        
        expect(mails).toContain("Dixon@visualpartnership.xyz");
    });
});