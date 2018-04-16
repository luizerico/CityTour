export class Account {
  constructor(
    public mindUREId: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public dateOfBirth: string,
    public username: string,
    public password: string,
    public confirmPassword: string,

  ) { }
}
