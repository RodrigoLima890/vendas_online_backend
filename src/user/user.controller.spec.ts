import { Test } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ReturnUserDto } from "./dtos/returnUser.dto";
import { UserEntity } from "src/db/entities/user.entity";
import { NotFoundException } from "@nestjs/common/exceptions";

describe('UserController', () => {
    let userController: UserController
    let userService: UserService

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService]
        }).compile();

        userService = moduleRef.get<UserService>(UserService);
        userController = moduleRef.get<UserController>(UserController);
    })

    describe('getUserByIdUsingReferences', () => {
        it('should return an instance of ReturnUserDto', async () => {
            const userId = 1;
            const user = new UserEntity();
            user.id = userId;
            user.name = 'Test User'; // Adicione os campos necessários

            jest.spyOn(userService, 'getUserByIdUsingReferences').mockResolvedValue(user);

            const result = await userController.getUserById(userId);

            expect(result).toBeInstanceOf(ReturnUserDto);
        });

        it('should throw NotFoundException if user not found', async () => {
            const userId = 1;
            jest.spyOn(userService, 'getUserByIdUsingReferences').mockRejectedValue(new NotFoundException('User Not Found'));
            await expect(userController.getUserById(userId)).rejects.toThrow(NotFoundException);
        });
    })

})
