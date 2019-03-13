import { Component, OnInit } from '@angular/core';
import {Gasolinera} from '../models/Gasolinera';
import {GasolineraService} from '../services/gasolinera.service';

@Component({
  selector: 'app-buscar-codpostal',
  templateUrl: './buscar-codpostal.component.html',
  styleUrls: ['./buscar-codpostal.component.css']
})
export class BuscarCodpostalComponent implements OnInit {

  public codPostal: string;
  public gasolineras: Gasolinera[];
  public error: boolean;

  constructor(private gasolineraService: GasolineraService) {
    this.codPostal = '';
    this.gasolineras = null;
    this.error = false;
  }

  ngOnInit() {
  }

  submitHandler() {
    this.error = false;

    console.log('Buscando gasolineras por Código Postal', this.codPostal);

    this.gasolineraService.getGasolinerasByCodPostal(this.codPostal).subscribe(
      result => {
        console.log('Recibidas', result.length, 'gasolineras');
        this.gasolineras = result;
      },
      error => {
        this.gasolineras = null;
        this.error = true;
        console.error('Error obteniendo gasolineras:\n' + error.message);
      }
    );
  }

}
