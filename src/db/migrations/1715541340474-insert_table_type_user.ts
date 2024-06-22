import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTableTypeUser1719098707203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO type_user("id","description") VALUES(1, 'Cliente');
            INSERT INTO type_user("id","description") VALUES(2, 'Vendedor Terceiro');
            INSERT INTO type_user("id","description") VALUES(3, 'Admin');
`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE TABLE public.type_user;
            `)
    }

}
