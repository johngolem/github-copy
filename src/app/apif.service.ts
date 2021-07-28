import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApifService {

  constructor(private httpClient:HttpClient) {}
// how it will fetch the github profile from search

public gitProfile(searchQuery: any):Observable<any>{
  let dataURL = `https://api.github.com/users/${searchQuery}`
  return this.httpClient.get <any>(dataURL)
   }
  // how it will fetch the github repos from search

public gitRepos(searchQuery: any):Observable<any[]> {
    let dataURL = `https://api.github.com/users/${searchQuery}/repos`
    return this.httpClient.get<any[]>(dataURL)
   }
}
