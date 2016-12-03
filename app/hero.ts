export class Hero {
  constructor(
    public name: string,
    public gender: string,
    public age: number,
    public nickname?: string,
    public index?: number,
    public student?: number,
    public dob?: Date,
  ) {  }
}