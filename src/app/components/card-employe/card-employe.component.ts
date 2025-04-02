import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-card-employe',
  imports: [CommonModule],
  templateUrl: './card-employe.component.html',
  styleUrl: './card-employe.component.css',
})
export class CardEmployeComponent {
  @Input() employee: Employee | undefined;
  employeeService = inject(EmployeesService);

  async onDeleteEmployee(id: string) {
    try {
      const respuesta = await this.employeeService.remove(id);
      if (respuesta) {
        this.employee = undefined;
      }
    } catch (error: any) {
      console.error(error.error.error);
    }
  }
}
