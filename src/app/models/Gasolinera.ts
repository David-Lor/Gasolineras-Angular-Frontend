import {Carburante} from './Carburante';

export class Gasolinera {
  constructor(
    public _id: String,
    public ubicacion: Number[],
    public carburantes: Carburante[],
    public codPostal: String,
    public direccion: String,
    public horario: String,
    public localidad: String,
    public margen: String,
    public municipio: String,
    public provincia: String,
    public marca: String,
    public datetime: Date
  ) {}
}
