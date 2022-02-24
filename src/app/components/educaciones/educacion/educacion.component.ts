import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion.model';
import { Fecha } from 'src/app/interfaces/fecha.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Input() miEducacion:Educacion;
  fechaInicio:Fecha;
  fechaFin:Fecha;
  constructor() { }

  ngOnInit(): void {
    this.fechaInicio = new Fecha(this.miEducacion.desde.mes,this.miEducacion.desde.anio);
    this.fechaFin = new Fecha(this.miEducacion.hasta.mes,this.miEducacion.hasta.anio)
  }

}
