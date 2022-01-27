import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): StudentResponseDTO[] {
    return this.studentService.getStudents();
  }

  @Get(':studentId')
  getStudentByID(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDTO {
    // console.log(studentId);
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDTO): StudentResponseDTO {
    // console.log(body);
    return this.studentService.createStudent(body);
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDTO,
  ): StudentResponseDTO {
    return this.studentService.updateStudent(body, studentId);
  }
}
