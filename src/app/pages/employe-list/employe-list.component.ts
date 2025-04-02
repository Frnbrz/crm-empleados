import { Component, inject } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/employee.interface';
import { CardEmployeComponent } from '../../components/card-employe/card-employe.component';

@Component({
  selector: 'app-employe-list',
  imports: [CardEmployeComponent],
  templateUrl: './employe-list.component.html',
  styleUrl: './employe-list.component.css',
})
export class EmployeListComponent {
  employeeService = inject(EmployeesService);
  employees: Employee[] = [];

  async ngOnInit() {
    try {
      this.employees = await this.employeeService.getAll();
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'error' in error) {
        console.error((error as any)?.error?.error);
      } else {
        console.error(error);
      }
    }
  }
}
