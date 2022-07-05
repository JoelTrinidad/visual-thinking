const Reader = require("./../../../lib/utils/Reader");

describe("Test for Reader", () => {
    test("should return information from a given path", () => {
        const visualpartners = Reader.readJsonFile("visualpartners.json");
        
        expect(visualpartners).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: "Taylor" }),
                expect.objectContaining({ email: "Nikki@visualpartnership.xyz" }),
                expect.objectContaining({ credits: 329 }),
            ])
        );
    });
});