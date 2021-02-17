
const path = require("path");

module.exports = function (app) {
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    app.get("contact", function (req, res) {
        res.sendFile(path.join(_dirname, "../contact.html"));
    });

    app.get("portfolio", function (req, res) {
        res.sendFile(path.join(_dirname, "../portfolio.html"));

    });

}

