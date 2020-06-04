const connection = require("../utils/dbconn");
const axios = require("axios");

module.exports = {
  async store(req, res) {
    const file = req.files;
    console.log(file);
    try {
      return res.json({ file: file }).status(201);
    } catch (err) {
      return res.status(400).json({ err, success: false });
    }
  },
};
