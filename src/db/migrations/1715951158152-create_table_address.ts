import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAddress1715951158152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        CREATE TABLE public.address (
            id integer NOT NULL primary key,
            user_id integer NOT NULL,
            complement character varying NOT NULL,
            number integer NOT NULL,
            cep character varying NOT NULL,
            city_id integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            foreign key (user_id) references public.user(id),
            foreign key (city_id) references public.city(id)
        );

        CREATE SEQUENCE public.address_id_seq AS integer
        START WITH 1 INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;

        ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
        ALTER TABLE public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.address;
            DROP TABLE public.address; `)
    }

}
