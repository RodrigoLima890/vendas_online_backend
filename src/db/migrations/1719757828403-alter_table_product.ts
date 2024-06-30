import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableProduct1719757828403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE public.product ADD CONSTRAINT fk_product_category
            FOREIGN KEY(category_id) REFERENCES public.category(id);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
