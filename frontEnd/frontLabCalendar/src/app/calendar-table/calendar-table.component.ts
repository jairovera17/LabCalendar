import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {
  horas: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  idDias: number[] = [1, 2, 3, 4, 5, 6];
  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  constructor(private _http: Http) {

  }

  ngOnInit() {
  }
  getdia(numDia: number): string {
    return this.nombreDias[numDia - 1];
  }
  getAgenda(hora: number, dia: number): string {
    return 'ddddd';
  }

}
