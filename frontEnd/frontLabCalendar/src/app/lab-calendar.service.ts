import { Injectable } from '@angular/core';
import {MateriaProfesor} from "./misClasses/interfazMateriaProfesor";
import {Http} from "@angular/http";
import {AgendaLaboratorio} from "./misClasses/interfazAgenda";

@Injectable()
export class LabCalendarService {


  constructor(private _http:Http) { }


  getMateriaProfesor():MateriaProfesor[]{
    var materiaprofesor: MateriaProfesor[]=[];
    this._http
      .get('http://localhost:1337/MateriaProfesor')
      .subscribe(
        res => {
          const rjson: MateriaProfesor[] = res.json();

       //   console.log('halo',JSON.stringify(rjson));
          materiaprofesor = rjson;
          return rjson;


        },
        error => {
          console.log('error papu');
        }
      );

    return materiaprofesor;
  }

  guardarLabo(ingreso:Labo){
    this._http
      .post("http://localhost:1337/Laboratorio",ingreso)
      .subscribe(
        res=>{
          let resJson = res.json();
          console.log("resJson:",resJson);


        },
        error=>{
          console.log("error");
        }
      );
  }
  guardarModelo(ingreso:Modelo){
    this._http
      .post("http://localhost:1337/ModeloComputador",ingreso)
      .subscribe(
        res=>{
          let resJson = res.json();
          console.log("resJson:",resJson);


        },
        error=>{
          console.log("error");
        }
      );
  }
  guardarMateria(ingreso: Mat)  {
    this._http
      .post("http://localhost:1337/Materia",ingreso)
      .subscribe(
        res=>{
          let resJson = res.json();
          console.log("resJson:",resJson);


        },
        error=>{
          console.log("error");
        }
      );
  }
  guardarProfe(ingreso: Profe)  {
    this._http
      .post("http://localhost:1337/Profesor",ingreso)
      .subscribe(
        res=>{
          let resJson = res.json();
          console.log("resJson:",resJson);
        },
        error=>{
          console.log("error");
        }
      );
  }
  guardarNuevaAgenda(ingreso: AgendaLaboratorio){
    this._http
      .post('http://localhost:1337/AgendaLaboratorio/',ingreso)
      .subscribe(
        res => {
         // console.log(res);
        },
        err => {
          console.log('error ', err);
        }
      );
  }

}
class Labo{
  constructor(
    public nombre:string,
    public numeroAula:string,
    public numeroComputadoras:string,
    public idModeloComputador:number
  ){}
}
class Modelo{
  constructor(
    public marca:string,
    public procesador:string,
    public ram:string
  ){}
}
class Profe{
  constructor(public nombres:string,
              public apellidos:string,
              public ultimoTitulo:string){}
}
class Mat{
  constructor(
    public nombre:string,
    public codigo:string
  ){}
}

