const fs = require("fs");

class Reader {
    static readJsonFile (filePath) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
}

module.exports = Reader;