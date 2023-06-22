import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkDate'
})

export class CheckDatePipe implements PipeTransform {

  transform(strDate: string): boolean {
    let dateToCheck = new Date(strDate);
    let currentDate = new Date();

    dateToCheck.setHours(0,0,0,0);
    currentDate.setHours(0,0,0,0);
    return dateToCheck.getTime() < currentDate.getTime();
  }

}
