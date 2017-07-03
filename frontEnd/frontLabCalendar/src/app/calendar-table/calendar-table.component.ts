import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Laboratorio} from '../misClasses/interfazLaboratorio';
import {ModeloComputador} from '../misClasses/interfazModeloComputador';
import {Software} from '../misClasses/interfazSoftware';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {
  horas: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  idDias: number[] = [1, 2, 3, 4, 5, 6];
  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  laboratorios: Laboratorio[];
  selectLab: Laboratorio;
  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get('http://localhost:1337/Laboratorio/')
      .subscribe(
        res => {
          const rjson: Laboratorio[] = res.json();
          this.laboratorios = rjson;
          this.selectLab = this.laboratorios[0];
        },
        error => {
          console.log('error papu');
        }
      );

  }
  getdia(numDia: number): string {
    return this.nombreDias[numDia - 1];
  }
  getAgenda(hora: number, dia: number): string {
    return 'ddddd';
  }

  cargarLaboratorios () {
  this._http
    .get('http://localhost:1337/Laboratorio/')
    .subscribe(
  res => {
  const rjson: Laboratorio[] = res.json();
  this.laboratorios = rjson.map(
  (lab: Laboratorio) => {
    console.log(lab.nombre);
    return lab;
  }
);
},
error => {
  console.log('error papu');
}
);
}

  setLab(event){
    this.laboratorios.map(
      (lab: Laboratorio) => {
        if (lab.nombre === event.target.value) {
          this.selectLab = lab;
          return;
        }
      }
    );
  }
  vacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }


}

