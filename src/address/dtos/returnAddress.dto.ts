import { ReturnCityDto } from "src/city/dtos/returnCity.dto";
import { AddressEntity } from "src/db/entities/address.entity";

export class ReturnAddressDto{
    numberAddress: number

    complement:string

    cep:string

    cpf:string
    
    city?:ReturnCityDto;
    constructor(addressEntity:AddressEntity){
        this.numberAddress = addressEntity.numberAddress;
        this.cep = addressEntity.cep;
        this.complement = addressEntity.complement;
        this.city = addressEntity.city?new ReturnCityDto(addressEntity.city) :undefined;
    }
}