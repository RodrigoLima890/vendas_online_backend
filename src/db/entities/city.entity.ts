import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./address.entity";
import { StateEntity } from "./state.entity";

@Entity({name: 'city'})
export class CityEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:"state_id",nullable:false})
    stateId:number

    @Column({ name:"name",nullable:false})
    name:string

    @OneToMany(() => AddressEntity, (address)=> address.city)
    addresses?:AddressEntity[];

    @ManyToOne(() => StateEntity, (state)=> state.cities)
    @JoinColumn({'name':'state_id'})
    state?:StateEntity;

    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}