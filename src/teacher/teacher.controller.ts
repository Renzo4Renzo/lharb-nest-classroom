import { Controller, Get, Param } from '@nestjs/common';
import { TeacherResponseDTO } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): TeacherResponseDTO[] {
    return 'All Teachers';
  }
  @Get(':teacherId')
  getTeacherId(@Param('teacherId') teacherId: string): TeacherResponseDTO {
    return `Teacher with Id ${teacherId}`;
  }
}
