import { Component } from '@angular/core';
import {RequestsService} from "../../../service/requests.service";
import {catchError, switchMap, of as observableOf, BehaviorSubject, map,} from "rxjs";
import {merge} from "chart.js/helpers";

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent {

  head: any[] = ['created', 'Available', 'Gainers', 'Losers', 'T. Supply', '24H Volume'];
  type$ = new BehaviorSubject<string>('created');
  sorting$  = new BehaviorSubject<'DESC' | 'ASC'>('DESC');
  users$: any;
  constructor(public requestsService: RequestsService) {
    console.log(  '1', this.type$)
    console.log( '2', this.sorting$)
    merge(this.type$, this.sorting$)
      .pipe(
        switchMap(() => {
           return this.requestsService
            .getSort(
              this.type$.getValue(),
              this.sorting$.getValue(),
              1,
              10
            ).pipe(map((response: any) => response))
        }),
        map((data) => {
          if (data === null) {
            return [];
          }
          return data;
        })
      )
      .subscribe((data) => (this.users$ = data));

  }

}
