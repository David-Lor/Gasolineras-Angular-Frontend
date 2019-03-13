import { Component, OnInit } from '@angular/core';
import {GasolineraService} from '../services/gasolinera.service';
import {Gasolinera} from '../models/Gasolinera';

@Component({
  selector: 'app-buscar-id',
  templateUrl: './buscar-id.component.html',
  styleUrls: ['./buscar-id.component.css']
})
export class BuscarIdComponent implements OnInit {

  public idGasolinera: string;
  public gasolinera: Gasolinera;
  public noEncontrado: boolean;
  public error: boolean;

  constructor(private gasolineraService: GasolineraService) {
    this.idGasolinera = '';
    this.gasolinera = null;
    this.noEncontrado = false;
    this.error = false;
  }

  ngOnInit() {
  }

  submitHandler() {
    this.noEncontrado = false;
    this.error = false;

    console.log('Buscando gasolinera ID', this.idGasolinera);

    this.gasolineraService.getGasolineraById(this.idGasolinera).subscribe(
      result => {
        console.log('Recibida gasolinera:\n' + JSON.stringify(result));
        this.gasolinera = result;
      },
      error => {
        this.gasolinera = null;
        if (error.status === 404) {
          console.warn('Gasolinera no encontrada');
          this.noEncontrado = true;
        } else {
          console.error('Error obteniendo gasolinera:\n' + error.message);
          this.error = true;
        }
      }
    );
  }

}
