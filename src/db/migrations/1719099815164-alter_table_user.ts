import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableUser1719099815164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE public.user ADD CONSTRAINT fk_user_user_type
            FOREIGN KEY(type_user) REFERENCES public.type_user(id);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
