import { TypeUserEntity } from "src/db/entities/type_user.entity";
export class ReturnTypeUserDto{

    constructor(typeUserEntiy:TypeUserEntity){
        this.description = typeUserEntiy.description
    }

    description:String
}