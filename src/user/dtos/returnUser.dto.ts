import { ReturnAddressDto } from "src/address/dtos/returnAddress.dto";
import { TypeUserEntity } from "src/db/entities/type_user.entity";
import { UserEntity } from "src/db/entities/user.entity";
import { ReturnTypeUserDto } from "src/type_user/dtos/returnTypeUserDto";

export class ReturnUserDto{
    constructor(userEntity:UserEntity){
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
        this.typeUser = new ReturnTypeUserDto(userEntity.typeUser);
        this.addresses = userEntity.addresses?userEntity.addresses.map((address)=> new ReturnAddressDto(address)) :undefined
    }

    id: number

    name:string

    email:string

    phone:string

    cpf:string

    addresses?: ReturnAddressDto[]

    typeUser : ReturnTypeUserDto;
}