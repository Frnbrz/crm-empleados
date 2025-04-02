import { User } from './user.interface';

export interface Result {
  success?: string;
  token?: string;
  user?: User;
  error?: string;
}
