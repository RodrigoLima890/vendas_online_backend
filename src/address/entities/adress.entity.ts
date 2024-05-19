import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'address'})
export class AddressEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:"user_id",nullable:false})
    userId:number

    @Column({name:"complement",nullable:true})
    complement:string

    @Column({ name:"cep",nullable:false})
    cap:number

    @Column({name:"number",nullable:false})
    numberAddress:number

    @Column({name:"city_id",nullable:false})
    cityId:number

    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}