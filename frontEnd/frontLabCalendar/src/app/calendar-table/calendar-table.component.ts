import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Laboratorio} from '../misClasses/interfazLaboratorio';
import {MateriaProfesor} from "../misClasses/interfazMateriaProfesor";
import {LabCalendarService} from "../lab-calendar.service";
import {delay} from "q";

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {


  horas: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  idDias: number[] = [0, 1, 2, 3, 4, 5];
  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  @Input()selectLab: Laboratorio;
  @Input()semanaInicio: Date;
  @Input()semanaFin:Date;
  materiaprofesor:MateriaProfesor[]=[];
  reboot = false;

  constructor(private _http: Http,private labService: LabCalendarService) {
  }

  ngOnInit() {
    this.reboot=false;
    this.getMateriaProfesor();
  }


//devuelve el nombre del dia como string
  getDiaNombre(numDia: number): string {
    return this.nombreDias[numDia];
  }

  cambioEnCelda(){
    this.reboot=!this.reboot;
  }
  getMateriaProfesor():void{


    this._http
      .get('http://localhost:1337/MateriaProfesor')
      .subscribe(
        res => {
          const rjson: MateriaProfesor[] = res.json();


          this.materiaprofesor = rjson;



        },
        error => {
          console.log('error papu');
        }
      );


  }
}

