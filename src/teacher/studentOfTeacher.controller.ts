import { Controller, Param, Get, Put, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { StudentResponseDTO } from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentOfTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudentsOfTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): StudentResponseDTO[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }
  @Put(':studentId')
  updateStudentOfTeacher(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): StudentResponseDTO {
    return this.studentService.updateStudentTeacher(studentId, teacherId);
  }
}
