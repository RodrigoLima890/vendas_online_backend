import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";

@Entity({name:'type_user'})
export class TypeUserEntity{

    @PrimaryGeneratedColumn('rowid')
    id:Number

    @Column({name:'description', nullable:false})
    description:String

    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}