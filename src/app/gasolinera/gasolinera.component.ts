import {Component, Input, OnInit} from '@angular/core';
import {Gasolinera} from '../models/Gasolinera';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {

  @Input()
  gasolinera: Gasolinera;

  constructor() { }

  ngOnInit() {
  }

}
