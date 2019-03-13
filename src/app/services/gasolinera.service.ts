import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gasolinera} from '../models/Gasolinera';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  API = 'http://pythoneiro.ddns.net:7878';

  constructor(private httpClient: HttpClient) { }

  getGasolineraById(id: string) {
    return this.httpClient.get<Gasolinera>(this.API + '/id/' + id);
  }

  getGasolinerasByCodPostal(codPostal: string) {
    return this.httpClient.get<Gasolinera[]>(this.API + '/codpostal/' + codPostal);
  }

}
