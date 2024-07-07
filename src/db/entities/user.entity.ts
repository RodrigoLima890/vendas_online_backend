import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity as Addresses} from "./address.entity";
import { TypeUserEntity as TypeUser } from "./type_user.entity";
import { Type } from "class-transformer";

@Entity({name: 'user'})
export class UserEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:"name",nullable:false})
    name:string

    @Column({name:"email",nullable:false})
    email:string

    @Column({ name:"password",nullable:false})
    password:string

    @Column({name:"phone",nullable:false})
    phone:string

    @Column({name:"cpf",nullable:false})
    cpf:string

    @Column({name:'type_user', nullable:false})
    type_user:number

    @ManyToOne(()=>TypeUser, (typeUser)=>typeUser.id)
    @JoinColumn({name:'type_user'})
    typeUser:TypeUser

    @OneToMany(()=>Addresses, (addresses)=> addresses.user)
    addresses?:Addresses[];

    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}