import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getAllPessoas() : Observable<any> {
    return this.http.get(this.baseUrl + 'people/');
  };
}
