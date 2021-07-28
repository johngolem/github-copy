import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApifService {

  constructor(private httpClient:HttpClient) {}
// how it will fetch the github profile from search

public gitProfile(searchQuery: any):Observable<any>{
  let dataURL = 'https://api.github.com/users/${searchQuery}';
  return this.httpClient.get <any>(dataURL).pipe(
   retry (1),
   catchError(this.handleErrors)
  );
}

  // how it will fetch the github repos from search

public gitRepos(searchQuery: any):Observable<any[]> {
    let dataURL = 'https://api.github.com/users/${searchQuery}/repos';
    return this.httpClient.get<any[]>(dataURL).pipe(
    retry(1),
    );
 }
public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if (error.error instanceof ErrorEvent){
      //error from client side
      errorMessage = 'MESSAGE : ${error.error.message}';
      }
    else{
    // error from the servers 
    errorMessage= 'STATUS : ${error.status} MESSAGE : ${error.message }';
  }
   return throwError(errorMessage);

    }
  

  
}
    
/*function retry(count: any, arg1: number): import("rxjs").OperatorFunction<ArrayBuffer, unknown> {
  throw new Error('Function not implemented.');
} */
