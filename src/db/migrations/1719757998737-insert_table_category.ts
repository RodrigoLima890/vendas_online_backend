import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTableCategory1719757998737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      INSERT INTO category("id", "name", "description") VALUES (1, 'Video Games', 'Produtos relacionados ao universo gamer');
      INSERT INTO category("id", "name", "description") VALUES (2, 'Automóveis', 'Produtos relacionados a automoveis');
      INSERT INTO category("id", "name", "description") VALUES (3, 'Eletronicos', '');
      INSERT INTO category("id", "name", "description") VALUES (4, 'Eletrodomesticos', '');`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.category;
            `)
    }

}
