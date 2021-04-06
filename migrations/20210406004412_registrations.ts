import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.dropTable("registrations")
}


export async function down(knex: Knex): Promise<void> {
}

