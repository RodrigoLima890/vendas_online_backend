import { ReturnAddressDto } from "src/address/dtos/returnAddress.dto";
import { UserEntity } from "src/db/entities/user.entity";

export class ReturnUserDto{
    constructor(userEntity:UserEntity){
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
        this.addresses = userEntity.addresses?userEntity.addresses.map((address)=> new ReturnAddressDto(address)) :undefined
    }

    id: number

    name:string

    email:string

    phone:string

    cpf:string

    addresses?: ReturnAddressDto[]
}