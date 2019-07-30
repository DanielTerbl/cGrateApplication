import { EGenders } from '../Enums/GenderEnum';

export interface IPerson{
name:string;
surname:string;
dateOfBirth:string;
gender: EGenders;
email:string;
notes:string;
id:string;
GetFullName():string;
}