exports.up = function(knex) {
    return knex.schema.createTable('fruits', fruits => {
        //primary key, called "id", an integer, auto-increments
        fruits.increments();

        fruits
        .string('name', 128)
        .notNullable()
        .unique();
        
        fruits.float('avgWeightOz');
        fruits.boolean('delicious').defaultTo(true);//true=1 & false=0
    })
};

//Down function describes how to revert the changes (like undo for the schema)
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits');
};