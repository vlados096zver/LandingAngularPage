import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor( private http: HttpClient) { }

  public createUser(data:any):Observable<any>{
    return this.http.post('https://gorest.co.in/public/v2/users',data, {
      headers: {
        "Authorization": "Bearer 8fb49e6bedb88d881f7d7e2db15df40544c741467ff4dd6fd52130efabe6a903"
      }
    })
  }

  public getUsers():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/users');
  }

  public getBlogPost():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/posts');
  }

  // public getSearch(value: string):Observable<any>{
  //   return this.http.get(`https://gorest.co.in/public/v2/users/${value}`);
  // }

  // public Sorting(value: string):Observable<any>{
  //   return this.http.get(`https://gorest.co.in/public/v2/users/${value}`);
  // }

  // public Sorting(
  //   filter: string,
  //   sort: string,
  //   order: SortDirection,
  //   page: number,
  //   perpage: number
  // ): Observable<any> {
  //   const href = 'https://api.github.com/search/issues';
  //   const requestUrl = `${href}?q=${filter}+in:title+repo:angular/components&sort=${sort}&order=${order}&page=${page}&per_page=${perpage}`;
  //
  //   return this.http.get<any>(requestUrl);
  // }



  getSearch(term:any) {
    const baseUrl: string = 'https://api.cdnjs.com/libraries';
    const  queryUrl: string = '?search=';
    return this.http.get(baseUrl  + queryUrl + term);
  }

   public getSort(

       sort: any,
       order: any,
       page: number,
       perpage: number

   ): Observable<any> {
     const href = 'https://api.github.com/search/issues';
     const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page}&per_page=${perpage}`;
    console.log(requestUrl)
     return this.http.get(requestUrl);
   }

}
