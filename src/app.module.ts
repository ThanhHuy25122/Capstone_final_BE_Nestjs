import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JobModule } from './job/job.module';
import { JobDetailModule } from './job-detail/job-detail.module';
import { JobTypeModule } from './job-type/job-type.module';
import { HireJobModule } from './hire-job/hire-job.module';
import { SkillModule } from './skill/skill.module';
import { PreviewModule } from './preview/preview.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    JobModule,
    JobDetailModule,
    JobTypeModule,
    HireJobModule,
    SkillModule,
    PreviewModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
