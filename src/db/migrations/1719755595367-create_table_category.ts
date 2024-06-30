import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCategory1719756582279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.category(
                id INTEGER NOT NULL PRIMARY KEY,
                name varchar(45) NOT NULL,
                description VARCHAR(70),
                create_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL
            );
            CREATE SEQUENCE public.category_id_seq AS integer
            START WITH 1 INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

            ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
            ALTER TABLE public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.category;
            DROP TABLE public.category; `
        )
    }

}
