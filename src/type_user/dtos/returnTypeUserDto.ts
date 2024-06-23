import { TypeUserEntity } from "src/db/entities/type_user.entity";
export class ReturnTypeUserDto{

    constructor(typeUserEntiy:TypeUserEntity){
        this.id = typeUserEntiy.id;
        this.description = typeUserEntiy.description
    }

    id:Number;
    description:String
}