exports.up = function (knex) {
  return knex.schema.createTable("sorteio_fotos", function (table) {
    table.increments();
    table.integer("sorteio_id").unsigned();
    table.foreign("sorteio_id").references("sorteios.id");
    table.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sorteio_fotos");
};
