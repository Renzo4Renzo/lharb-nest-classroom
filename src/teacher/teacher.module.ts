import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentOfTeacherController } from './studentOfTeacher.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentModule],
  controllers: [TeacherController, StudentOfTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
