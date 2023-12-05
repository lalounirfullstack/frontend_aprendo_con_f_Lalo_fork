import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User, sendStatus } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:3001/api/users/';

  private baseUrlprofessor: string =
    'http://localhost:3001/api/users/profesores/activo';
  private baseUrlstudent: string =
    'http://localhost:3001/api/users/estudiante/activo';

  private httpClient = inject(HttpClient);

  getAllUsers() {
    return firstValueFrom(this.httpClient.get<User[]>(this.baseUrl));
  }

  updateState(id: number, status: sendStatus) {
    return firstValueFrom(
      this.httpClient.put<any[]>(`${this.baseUrl}/estado/${id}`, status)
    );
  }
  getAllActiveProfessors() {
    return firstValueFrom(this.httpClient.get<User[]>(this.baseUrlprofessor));
  }

  getProfessorById(id: number): Promise<User> {
    return firstValueFrom(
      this.httpClient.get<User>(`${this.baseUrlprofessor}/${id}`)
    );
  }

  getAllActiveStudents() {
    return firstValueFrom(this.httpClient.get<User[]>(this.baseUrlstudent));
  }

  getStudentById(id: number): Promise<User> {
    return firstValueFrom(
      this.httpClient.get<User>(`${this.baseUrlstudent}/${id}`)
    );
  }
}
