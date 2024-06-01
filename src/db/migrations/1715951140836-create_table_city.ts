import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCity1715951140836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        CREATE TABLE public.city (
            id integer NOT NULL PRIMARY KEY,
            state_id integer NOT NULL,
            name character varying NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            FOREIGN KEY (state_id) REFERENCES public.state(id)
        );
        

        CREATE SEQUENCE public.city_id_seq AS integer
        START WITH 1 INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;

        ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;
        ALTER TABLE public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE public.city;`)
    }

}
