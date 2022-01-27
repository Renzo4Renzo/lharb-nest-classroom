import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { TeacherResponseDTO } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachersList = teachers;
  getTeacher(): TeacherResponseDTO[] {
    return this.teachersList;
  }
  getTeacherById(teacherId): TeacherResponseDTO {
    return this.teachersList.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
