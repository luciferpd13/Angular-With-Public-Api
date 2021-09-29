import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetAPIService {

  constructor(private http: HttpClient) { }
  
  getAPI(url: any): Observable<any>{
    return this.http.get<any>(url)
  }
}
