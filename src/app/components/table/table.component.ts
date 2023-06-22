import {Component, OnDestroy, OnInit} from '@angular/core';


import { FormControl, FormGroup } from '@angular/forms';
import {ITable} from "../../models/table.model";
import {table} from "../../data/table";
import {
  Observable,
  debounceTime, Subject,
  switchMap, map
} from 'rxjs';

import { distinctUntilChanged } from 'rxjs/operators'
import {RequestsService} from "../../service/requests.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  table: ITable[] = table;
  resultSearch: any[] = [];

  searchTerm$ = new Subject<string>();
  constructor(public requestsService: RequestsService) {
    this.search(this.searchTerm$)
      .subscribe(  {
        next: (res: any)=> {
          this.resultSearch = res;
        },
        error: (err: any) => {
          console.log(err)
        }
      })

  }

  search(terms: Observable<string>) {
      return terms.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term:any) =>
            this.requestsService.getSearch(term).pipe(map((response: any) => response
            ))
          )
      )
    }
  }

