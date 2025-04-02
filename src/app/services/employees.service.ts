import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private readonly BASE_URL: string =
    'https://crm-empleados.onrender.com/api/empleados';

  http = inject(HttpClient);

  getAll(): Promise<Employee[]> {
    return lastValueFrom(this.http.get<Employee[]>(this.BASE_URL));
  }

  remove(id: string): Promise<Employee> {
    return lastValueFrom(this.http.delete<Employee>(`${this.BASE_URL}/${id}`));
  }

  getById(idEmployee: string): Promise<Employee> {
    return lastValueFrom(
      this.http.get<Employee>(`${this.BASE_URL}/${idEmployee}`)
    );
  }
}
