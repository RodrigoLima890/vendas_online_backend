import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInCity1715953729310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO city("id", "name", "state_id") VALUES (1, 'Afonso Cláudio', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (2, 'Água Doce do Norte', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (3, 'Águia Branca', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (4, 'Alegre', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (5, 'Alfredo Chaves', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (6, 'Alto Rio Novo', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (7, 'Anchieta', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (8, 'Apiacá', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (9, 'Aracruz', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (10, 'Atilio Vivacqua', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (11, 'Baixo Guandu', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (12, 'Barra de São Francisco', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (13, 'Boa Esperança', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (14, 'Bom Jesus do Norte', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (15, 'Brejetuba', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (16, 'Cachoeiro de Itapemirim', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (17, 'Cariacica', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (18, 'Castelo', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (19, 'Colatina', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (20, 'Conceição da Barra', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (21, 'Conceição do Castelo', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (22, 'Divino de São Lourenço', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (23, 'Domingos Martins', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (24, 'Dores do Rio Preto', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (25, 'Ecoporanga', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (26, 'Fundão', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (27, 'Governador Lindenberg', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (28, 'Guaçuí', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (29, 'Guarapari', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (30, 'Ibatiba', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (31, 'Ibiraçu', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (32, 'Ibitirama', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (33, 'Iconha', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (34, 'Irupi', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (35, 'Itaguaçu', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (36, 'Itapemirim', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (37, 'Itarana', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (38, 'Iúna', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (39, 'Jaguaré', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (40, 'Jerônimo Monteiro', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (41, 'João Neiva', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (42, 'Laranja da Terra', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (43, 'Linhares', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (44, 'Mantenópolis', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (45, 'Marataízes', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (46, 'Marechal Floriano', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (47, 'Marilândia', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (48, 'Mimoso do Sul', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (49, 'Montanha', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (50, 'Mucurici', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (51, 'Muniz Freire', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (52, 'Muqui', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (53, 'Nova Venécia', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (54, 'Pancas', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (55, 'Pedro Canário', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (56, 'Pinheiros', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (57, 'Piúma', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (58, 'Ponto Belo', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (59, 'Presidente Kennedy', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (60, 'Rio Bananal', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (61, 'Rio Novo do Sul', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (62, 'Santa Leopoldina', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (63, 'Santa Maria de Jetibá', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (64, 'Santa Teresa', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (65, 'São Domingos do Norte', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (66, 'São Gabriel da Palha', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (67, 'São José do Calçado', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (68, 'São Mateus', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (69, 'São Roque do Canaã', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (70, 'Serra', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (71, 'Sooretama', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (72, 'Vargem Alta', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (73, 'Venda Nova do Imigrante', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (74, 'Viana', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (75, 'Vila Pavão', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (76, 'Vila Valério', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (77, 'Vila Velha', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (78, 'Vitória', 8);
        INSERT INTO city("id", "name", "state_id") VALUES (79, 'Acrelândia', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (80, 'Assis Brasil', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (81, 'Brasiléia', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (82, 'Bujari', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (83, 'Capixaba', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (84, 'Cruzeiro do Sul', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (85, 'Epitaciolândia', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (86, 'Feijó', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (87, 'Jordão', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (88, 'Mâncio Lima', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (89, 'Manoel Urbano', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (90, 'Marechal Thaumaturgo', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (91, 'Plácido de Castro', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (92, 'Porto Acre', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (93, 'Porto Walter', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (94, 'Rio Branco', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (95, 'Rodrigues Alves', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (96, 'Santa Rosa do Purus', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (97, 'Sena Madureira', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (98, 'Senador Guiomard', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (99, 'Tarauacá', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (100, 'Xapuri', 1);
        INSERT INTO city("id", "name", "state_id") VALUES (101, 'Água Branca', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (102, 'Anadia', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (103, 'Arapiraca', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (104, 'Atalaia', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (105, 'Barra de Santo Antônio', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (106, 'Barra de São Miguel', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (107, 'Batalha', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (108, 'Belém', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (109, 'Belo Monte', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (110, 'Boca da Mata', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (111, 'Branquinha', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (112, 'Cacimbinhas', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (113, 'Cajueiro', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (114, 'Campestre', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (115, 'Campo Alegre', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (116, 'Campo Grande', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (117, 'Canapi', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (118, 'Capela', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (119, 'Carneiros', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (120, 'Chã Preta', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (121, 'Coité do Nóia', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (122, 'Colônia Leopoldina', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (123, 'Coqueiro Seco', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (124, 'Coruripe', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (125, 'Craíbas', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (126, 'Delmiro Gouveia', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (127, 'Dois Riachos', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (128, 'Estrela de Alagoas', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (129, 'Feira Grande', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (130, 'Feliz Deserto', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (131, 'Flexeiras', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (132, 'Girau do Ponciano', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (133, 'Ibateguara', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (134, 'Igaci', 2);
        INSERT INTO city("id", "name", "state_id") VALUES (135, 'Igreja Nova', 2);`
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      DELETE FROM public.city;
    `);
    }

}
