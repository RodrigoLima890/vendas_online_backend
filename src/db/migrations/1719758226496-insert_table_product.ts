import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTableProduct1719758226496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      INSERT INTO product("id", "description", "price", "category_id") VALUES (1, 'Evil West - Jogo Xbox one', 120.00, 1);
      INSERT INTO product("id", "description", "price", "category_id") VALUES (2, 'Forno microondas', 230.00, 4);
      INSERT INTO product("id", "description", "price", "category_id") VALUES (3, 'Notebook Acer i5', 2300.00, 3);
      INSERT INTO product("id", "description", "price", "category_id") VALUES (4, 'Bateria Moura', 70.00, 2);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.category;
            `)
    }

}
