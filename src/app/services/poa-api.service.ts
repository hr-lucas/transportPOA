import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATCH } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoaApiService {

  constructor(
    private http: HttpClient
    ) { }


  get listLinha():Observable<any>{
    return this.http.get<any>(`${API_PATCH}a=nc&p=%25&t=O`).pipe(
      tap(res => res)
    )
  }

  get listLotacao():Observable<any>{
    return this.http.get<any>(`${API_PATCH}a=nc&p=%&t=l`).pipe(
      tap(res => res)
    )
  }
}

