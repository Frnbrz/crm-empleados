import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Result } from '../interfaces/response.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private readonly url: string =
    'https://crm-empleados.onrender.com/api/usuarios';

  login(user: User): Promise<Result> {
    return lastValueFrom(this.http.post<Result>(`${this.url}/login`, user));
  }
}
