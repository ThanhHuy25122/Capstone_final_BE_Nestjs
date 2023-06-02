import { NguoiDung } from '@prisma/client';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config/dist';
import { UserDto } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    private config;
    constructor(userService: UserService, config: ConfigService);
    findAll(): Promise<NguoiDung[]>;
    findOne(userId: string): Promise<NguoiDung>;
    create(user: UserDto): Promise<never>;
    update(userId: string, updateUserDto: UserDto): Promise<never>;
    remove(userId: string): Promise<never>;
}
