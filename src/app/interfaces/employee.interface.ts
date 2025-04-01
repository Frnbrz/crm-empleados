export interface Employee {
  _id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  departamento: string;
  salario: number;
  createAt?: Date;
  updateAt?: Date;
}
