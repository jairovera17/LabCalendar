import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Laboratorio} from "../misClasses/interfazLaboratorio";


@Component({
  selector: 'app-week-view-calendar',
  templateUrl: './week-view-calendar.component.html',
  styleUrls: ['./week-view-calendar.component.css']
})
export class WeekViewCalendarComponent implements OnInit {

  laboratorios: Laboratorio[];
  selectLab: Laboratorio;
  abrirCalendario = false;
  constructor(private _http: Http) {
  }

  ngOnInit() {
    this._http
      .get('http://localhost:1337/Laboratorio/')
      .subscribe(
        res => {
          const rjson: Laboratorio[] = res.json();
          this.laboratorios = rjson;
          console.log(JSON.stringify(this.laboratorios));
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
          this.abrirCalendario=true;
          return;
        }
      }
    );
  }

  vacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }

  abrirLab(): void {
    this.abrirCalendario = true;
  }

  getSelectedLabName(lab: Laboratorio): string{
    if (this.vacio(lab)){
      return 'Laboratorio Sin Seleccionar';
    } else {
      return lab.nombre;
    }
  }

}
