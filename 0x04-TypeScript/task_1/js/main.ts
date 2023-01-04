interface Teacher {
  readonly  firstName: string;
  readonly  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}
