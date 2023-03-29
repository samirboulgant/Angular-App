import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from './model/Tache';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'http://localhost:8080/taches/';
  constructor(private httpClient: HttpClient) {}

  getTaches(): Observable<Tache[]> {
    return this.httpClient.get<Tache[]>(`${this.baseURL}`);
  }

  addTache(tache: Tache): Observable<Object> {
    console.log(tache);
    return this.httpClient.post(`${this.baseURL}`, tache);
  }
  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}${id}`);
  }
  getTachebyId(id: number): Observable<Tache> {
    return this.httpClient.get<Tache>(`${this.baseURL}${id}`);
  }
  updateTache(tache: Tache): Observable<object> {
    return this.httpClient.put<Tache>(`${this.baseURL}${tache.id}`, tache);
  }
  searchByDescription(descreption: string): Observable<Tache[]> {
    const params = new HttpParams().set('descreption', descreption);
    return this.httpClient.get<Tache[]>(`${this.baseURL}search`, { params });
  }
}
