const connection = require("../utils/dbconn");
const axios = require("axios");

module.exports = {
  /**
    @route GET sorteio/
    @desc Salve um sorteio
    @access Auth'ed
    */

  async index(req, res) {
    try {
      const response = await connection("sorteios").select("*");

      return res.json({ response, success: true }).status(201);
    } catch (err) {
      return res.status(400).json({ err, success: false });
    }
  },

  async show(req, res) {
    try {
      const { sorteio_id, user_id } = req.params;
      const response = await connection("sorteios")
        .select("sorteios.*", "users.name", "users.email")
        .leftJoin("users", "users.id", "=", Number(user_id))
        .where({ "sorteios.id": sorteio_id })
        .first();
      const rifasResponse = await connection("rifas")
        .select("*")
        .where({ sorteio_id })
        .orderBy("numero");
      const sorteioInfoComRifa = Object.assign({}, response, {
        rifas: rifasResponse,
      });

      return res.json({ sorteioInfoComRifa, success: true }).status(201);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err, success: false });
    }
  },

  /**
    @route POST sorteio/store
    @desc Salve um sorteio
    @access Auth'ed
    */

  async store(req, res) {
    const {
      user_id,
      titulo,
      descricao,
      data_sorteio,
      quantidade_rifas,
      preco_por_rifa,
    } = req.body;

    try {
      const [response] = await connection("sorteios")
        .insert({
          user_id,
          titulo,
          descricao,
          data_sorteio,
          quantidade_rifas,
          preco_por_rifa,
        })
        .returning("*");

      for (let i = 0; i < quantidade_rifas; i++) {
        const res = await connection("rifas").insert({
          sorteio_id: response.id,
          numero: i,
          user_id: null,
          disponivel: true,
          data_venda: null,
        });
      }

      //   const rifasRes = await axios.post(`http://localhost:8000/rifas`, {
      //     quantidade_rifas,
      //     sorteio_id: response.id,
      //   });

      return res.json({ response, success: true }).status(201);
    } catch (err) {
      return res.status(400).json({ err, success: false });
    }
  },
};
