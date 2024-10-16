import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { PreviewsController } from './controllers/previews.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, CoursesController, PreviewsController, UsersController ],
  providers: [AppService],
})
export class AppModule {}
