exports.up = function (knex) {
  return knex.schema.createTable("rifas", function (table) {
    table.increments();
    table.integer("sorteio_id").unsigned();
    table.foreign("sorteio_id").references("sorteios.id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.integer("numero").notNullable();
    table.integer("preco").notNullable();
    table.boolean("disponivel").defaultTo(true);
    table.date("data_venda");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rifas");
};
