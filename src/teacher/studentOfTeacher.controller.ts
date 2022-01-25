import { Controller, Param, Get, Put, Body } from '@nestjs/common';
import { StudentResponseDTO } from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentOfTeacherController {
  @Get()
  getStudentsOfTeacher(
    @Param('teacherId') teacherId: string,
  ): StudentResponseDTO[] {
    return `All students for teacher with Id ${teacherId}`;
  }
  @Put(':studentId')
  updateStudentOfTeacher(
    @Param('studentId') studentId: string,
    @Param('teacherId') teacherId: string,
    @Body() body,
  ): StudentResponseDTO {
    return `Student with id ${studentId} updated with data ${JSON.stringify(
      body,
    )} of teacher ${teacherId} updated`;
  }
}
