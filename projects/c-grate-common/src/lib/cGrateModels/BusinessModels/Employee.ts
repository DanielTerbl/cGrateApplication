import { IPerson } from '../Interfaces/IPerson';

export class Employee implements IPerson
{
    id: string;
    email: string;
    notes: string;
    public GetFullName(): string {
       return name + " " +this.surname;
    }
    name: string;    surname: string;
    dateOfBirth: string;
    gender: import("../Enums/GenderEnum").EGenders;



}