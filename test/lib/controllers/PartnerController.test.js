const PartnerController = require("../../../lib/controllers/PartnerController");

describe('Test for PartnerController', () => {
    test('Get all the partners', () => {
        const partners = PartnerController.getPartners();

        expect(partners).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: "Taylor" }),
                expect.objectContaining({ email: "Nikki@visualpartnership.xyz" }),
                expect.objectContaining({ credits: 329 }),
            ])
        );
    });
});