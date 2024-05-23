import { AddressEntity } from "src/db/entities/address.entity";

export class ReturnAddressDto{
    constructor(addressEntity:AddressEntity){
        this.numberAddress = addressEntity.numberAddress;
        this.cep = addressEntity.cep;
        this.complement = addressEntity.complement;
    }

    numberAddress: number

    complement:string

    cep:string

    cpf:string
}