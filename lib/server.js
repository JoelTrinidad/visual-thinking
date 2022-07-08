const express = require("express");
const PartnerController = require("./controllers/PartnerController");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});
