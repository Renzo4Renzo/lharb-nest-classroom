import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentOfTeacherController } from 'src/teacher/studentOfTeacher.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentController } from '../student/student.controller';
@Module({
  imports: [],
  controllers: [
    StudentController,
    TeacherController,
    StudentOfTeacherController,
  ],
  providers: [StudentService],
})
export class AppModule {}
