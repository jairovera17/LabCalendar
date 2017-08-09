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


  semanaInicio: Date;
  semanaFin: Date;

  nombreMeses= ['Ene','Feb','Mar','Abr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dic'];

  constructor(private _http: Http) {
  }

  ngOnInit() {

    this._http
      .get('http://localhost:1337/Laboratorio/')
      .subscribe(
        res => {
          const rjson: Laboratorio[] = res.json();
          this.laboratorios = rjson;

        },
        error => {
          console.log('error papu');
        }
      );
    var dia = new Date();
    //lunes
    this.semanaInicio=new Date(dia.getFullYear(),dia.getMonth(),0);
    //sabado
    this.semanaFin = new Date(dia.getFullYear(),dia.getMonth(),5);
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

  getSelectedLabName(lab: Laboratorio): string{
    if (this.vacio(lab)){
      return 'Laboratorio Sin Seleccionar';
    } else {
      return lab.nombre;
    }
  }

  irSemanaAdelante(){
   var dia = new Date();
    this.semanaInicio=new Date(this.semanaInicio.getFullYear(),this.semanaInicio.getMonth(),this.semanaInicio.getDate()+7);
    //sabado
    this.semanaFin = new Date(this.semanaFin.getFullYear(),this.semanaFin.getMonth(),this.semanaFin.getDate()+7);
    console.log(this.semanaInicio);
    console.log(this.semanaFin);
  }
  irSemanaAtras(){
    var dia = new Date();
    this.semanaInicio=new Date(this.semanaInicio.getFullYear(),this.semanaInicio.getMonth(),this.semanaInicio.getDate()-7);
    //sabado
    this.semanaFin = new Date(this.semanaFin.getFullYear(),this.semanaFin.getMonth(),this.semanaFin.getDate()-7);
    console.log(this.semanaInicio);
    console.log(this.semanaFin);
  }

}
