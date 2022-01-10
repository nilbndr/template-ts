export class DateN {
  hours: number;
  minutes: number;
  constructor() {
    var date = new Date;
    //date.setTime(result_from_Date_getTime);

    //var seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
  }

  increaseHours(): void {
    this.hours+=1;
  }
  increaseMinutes(): void {
    this.minutes+=1;
  }

  get(): string {
    return this.hours.toString() + this.minutes.toString();
  }

}
