import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config/dist';
import { JwtService } from '@nestjs/jwt';
import { UserLogin } from './entities/auth.entity';
import { Response } from 'src/interface/response.dto';
import { UserDto } from 'src/user/entities/user.entity';
declare class ResponseAuthLogin extends UserLogin {
    token: string;
}
export declare class AuthService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    login(userLogin: UserLogin): Promise<Response<ResponseAuthLogin> | any>;
    register(userSignup: UserDto): Promise<Response<UserDto>>;
}
export {};
