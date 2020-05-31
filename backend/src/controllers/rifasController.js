const connection = require("../utils/dbconn");

module.exports = {
  /**
    @route POST sorteio/store
    @desc Salve um sorteio
    @access Auth'ed
    */

  async store(req, res) {
    try {
      const { quantidade_rifas, sorteio_id } = req.body;
      console.log(sorteio_id);

      for (let i = 0; i < quantidade_rifas; i++) {
        var [response] = await connection("rifas").insert({
          sorteio_id,
          numero: i,
          user_id: null,
          disponivel: true,
          data_venda: null,
        });
      }

      return res.json({ response, success: true }).status(201);
    } catch (err) {
      return res.status(400).json({ err, success: false });
    }
  },
};
