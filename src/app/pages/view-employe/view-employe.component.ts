import { Component, inject, Input } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/employee.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-employe',
  imports: [CommonModule],
  templateUrl: './view-employe.component.html',
  styleUrl: './view-employe.component.css',
})
export class ViewEmployeComponent {
  @Input() idEmployee: string = '';
  employeeService = inject(EmployeesService);
  employee: Employee | undefined;

  async ngOnInit() {
    this.employee = await this.employeeService.getById(this.idEmployee);
  }
}
