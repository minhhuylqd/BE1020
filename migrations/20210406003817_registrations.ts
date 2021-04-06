import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists("registrations", (table) => {
        table.string("username").notNullable()
        table.string("displayed_nanme").notNullable()
        table.string("hashed_password").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
}

