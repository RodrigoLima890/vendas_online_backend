import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CityEntity } from "./city.entity";

@Entity({name: 'state'})
export class StateEntity{

     @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({ name:"name",nullable:false})
    name:string

    @Column({ name:"uf",nullable:false})
    uf:string

    @OneToMany(()=> CityEntity, (city) => city.state)
    cities:CityEntity[]
    
    @Column({name:"created_at"})
    createdAt:Date

    @Column({name:"updated_at"})
    updatedAt:Date
}