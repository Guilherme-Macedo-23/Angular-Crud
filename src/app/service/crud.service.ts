// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Local imports
import {Dados} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = 'http://localhost:8000/countries';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Dados[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Dados> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(dados: Dados) {
    return this.http.post<any>(this.baseUrl, dados);
  }

  update(id: string, dados: Dados): Observable<Dados> {
    return this.http.put<any>(this.baseUrl + '/' + id, dados);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
