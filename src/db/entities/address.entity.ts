import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity as User } from "./user.entity";
import { CityEntity } from "./city.entity";

@Entity({name: 'address'})
export class AddressEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:"user_id",nullable:false})
    userId:number

    @Column({name:"complement",nullable:true})
    complement:string

    @Column({ name:"cep",nullable:false})
    cep:string

    @Column({name:"number",nullable:false})
    numberAddress:number

    @Column({name:"city_id",nullable:false})
    cityId:number

    @ManyToOne(()=> User, (user) => user.addresses)
    @JoinColumn({name:'user_id', referencedColumnName:'id'})
    user?:User

    @ManyToOne(()=>CityEntity, (city)=> city.addresses)
    @JoinColumn({name: "city_id", referencedColumnName:'id'})
    city ?: CityEntity;

    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}