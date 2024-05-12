import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class UserEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:"name",nullable:false, length: 80})
    name:string

    @Column({name:"email",nullable:false,length:50})
    email:string

    @Column({ name:"password",nullable:false,length:250})
    password:string

    @Column({name:"phone",nullable:false,length:12})
    phone:string

    @Column({name:"cpf",nullable:false,length:11})
    cpf:string
}
