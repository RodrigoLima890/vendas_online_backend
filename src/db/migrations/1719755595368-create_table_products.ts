import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProducts1719755595368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.product(
                id INTEGER NOT NULL PRIMARY KEY,
                description VARCHAR(255) NOT NULL,
                price DECIMAL(10,4) NOT NULL DEFAULT 0,
                category_id INTEGER NOT NULL,
                create_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL
            );
            CREATE SEQUENCE public.product_id_seq AS integer
            START WITH 1 INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

            ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
            ALTER TABLE public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.product;
            DROP TABLE public.product; `
        )
    }

}
