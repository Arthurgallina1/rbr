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
      const { sorteio_id } = req.params;
      const response = await connection("sorteios")
        .select("sorteios.*", "users.name", "users.email")
        .leftJoin("users", "users.id", "=", "sorteios.user_id")
        .where({ "sorteios.id": sorteio_id })
        .first();
      const rifasResponse = await connection("rifas")
        .select("*")
        .where({ sorteio_id })
        .orderBy("numero");
      const fotosArray = await connection("sorteio_fotos").where({
        sorteio_id,
      });
      const [count] = await connection("rifas")
        .count("*")
        .where({ sorteio_id, disponivel: true });
      const sorteioAllInfo = Object.assign(
        {},
        { fotosArray },
        response,
        { count },
        {
          rifas: rifasResponse,
        }
      );

      return res.json({ sorteioAllInfo, success: true }).status(201);
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

    const files = req.files;
    // console.log(files);

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

      /**
       * @TODO Refatorar
       */
      for (let i = 1; i <= quantidade_rifas; i++) {
        const res = await connection("rifas").insert({
          sorteio_id: response.id,
          numero: i,
          user_id: null,
          disponivel: true,
          data_venda: null,
          preco: preco_por_rifa,
        });
      }
      for (let i = 0; i < files.length; i++) {
        const filesResponse = await connection("sorteio_fotos").insert({
          sorteio_id: response.id,
          url: `localhost:8000/files/${files[i].filename}`,
          filename: files[i].filename,
        });
      }

      return res.json({ response, success: true }).status(201);
    } catch (err) {
      console.debug("error on sorteio controller", err);
      return res.status(400).json({ err, success: false });
    }
  },
};
