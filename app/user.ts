import { Notebook } from './notebook';

export class User {
    userId: number;
    username: string;
    password: string;
    notebookSet: Notebook[];
}