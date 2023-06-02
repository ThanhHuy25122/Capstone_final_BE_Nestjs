import { PrismaClient } from '@prisma/client';
import { UserDto } from './entities/user.entity';
export declare class UserService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    create(user: UserDto): Promise<never>;
    getUser(): Promise<UserDto[]>;
    findOne(userId: number): Promise<UserDto>;
    update(userId: number, updateUserDto: UserDto): Promise<never>;
    remove(userId: number): Promise<never>;
}
