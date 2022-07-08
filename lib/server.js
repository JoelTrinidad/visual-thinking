const express = require("express");
const PartnerController = require("./controllers/PartnerController");

const app = express();
const port = 3000;

app.get("/partners", (req, res) => {
    const partners = PartnerController.getPartners();
    res.json(partners);
});

app.get("/partnersemails/certificate", (req, res) => {
    const partnersWithCertificate = PartnerController.getPartnerMailsWithCertification();
    res.json(partnersWithCertificate);
});

app.get("/partners/creditsover", (req, res) => {
    const partnersWithCreditsOver = PartnerController.getPartnersCreditsGreaterThan(500);
    res.json(partnersWithCreditsOver);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});
