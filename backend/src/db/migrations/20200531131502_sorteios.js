exports.up = function (knex) {
  return knex.schema.createTable("sorteios", function (table) {
    table.increments();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.string("titulo").notNullable();
    table.text("descricao").notNullable();
    table.date("data_sorteio").notNullable();
    table.integer("quantidade_rifas");
    table.integer("preco_por_rifa");
    table.datetime("createdAt").defaultTo(knex.fn.now());
    table.datetime("updatedAt").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sorteios");
};
