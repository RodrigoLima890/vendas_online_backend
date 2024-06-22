import { query } from "express";
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTypeUser1718801722488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.type_user(
                id integer not null,
                description varchar(100) not null,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                PRIMARY KEY(id)
            );

            CREATE SEQUENCE public.type_user_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

            ALTER SEQUENCE public.type_user_id_seq OWNED BY public.type_user.id;
            
            ALTER TABLE ONLY public.type_user ALTER COLUMN id SET DEFAULT nextval('public.type_user_id_seq'::regclass);

            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                DROP TABLE public.type_user
            `)
    }

}
