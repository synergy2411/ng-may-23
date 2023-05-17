import { IComment } from './comment';

export interface IUser {
  firstName: string;
  lastName: string;
  dob: Date;
  income: number;
  isWorking: boolean;
  company: string;
  votes: number;
  image: string;
  comments: IComment[];
}
