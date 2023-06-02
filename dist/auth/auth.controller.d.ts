import { AuthService } from './auth.service';
import { UserLogin } from './entities/auth.entity';
import { UserDto } from 'src/user/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: UserLogin): Promise<any>;
    signup(body: UserDto): Promise<import("../interface/response.dto").Response<UserDto>>;
}
