
exports.up = function(knex) {
    return knex.schema.createTable('veggies', tbl => {
        //primary key, called "id", an integer, auto-increments
        tbl.increments();

        tbl.string('name', 255)
        .notNullable()
        .unique()
        .index(); //makes searching for vegetables using this colum faster

        tbl.boolean('like_it').defaultTo(true)//true=1 & false=0
    })
};

//Down function describes how to revert the changes (like undo for the schema)
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies');
};

