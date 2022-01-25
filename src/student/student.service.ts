import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDTO,
  StudentResponseDTO,
  UpdateStudentDTO,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { identity } from 'rxjs';
import { platform } from 'os';

@Injectable()
export class StudentService {
  private studentList = students;

  getStudents(): StudentResponseDTO[] {
    return this.studentList;
  }

  getStudentById(studentId: string): StudentResponseDTO {
    return this.studentList.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDTO): StudentResponseDTO {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.studentList.push(newStudent);
    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDTO,
    studentId: string,
  ): StudentResponseDTO {
    let updatedStudent: StudentResponseDTO;
    const updatedStudentList = this.studentList.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else return student;
    });
    this.studentList = updatedStudentList;
    return updatedStudent;
  }
}
