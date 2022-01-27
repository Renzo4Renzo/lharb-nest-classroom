import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { TeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): TeacherResponseDTO[] {
    return this.teacherService.getTeacher();
  }
  @Get(':teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): TeacherResponseDTO {
    return this.teacherService.getTeacherById(teacherId);
  }
}
