import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Materia} from "../misClasses/interfazMateria";
import {Profesor} from "../misClasses/interfazProfesor";
import {MateriaProfesor} from "../misClasses/interfazMateriaProfesor";

@Component({
  selector: 'app-lab-view',
  templateUrl: './lab-view.component.html',
  styleUrls: ['./lab-view.component.css']
})
export class LabViewComponent implements OnInit {


  showLabs:boolean;
  showProfesores:boolean;
  showMaterias:boolean;
  showMateriaProfesor:boolean;

  materias:Materia[];
  profesores:Profesor[];
  materiaProfesor:MateriaProfesor[];

  constructor(private _http: Http) { }

  ngOnInit() {
    this.showLabs = false;
    this.showProfesores = false;
    this.showMaterias = false;
    this.showMateriaProfesor = false;
    this.cargar();
  }

  cargar(){
    this.cargarMaterias();
    this.cargarProfesores();
    this.cargarMateriaProfesor();
  }

  cargarMaterias(): void{
    this._http
      .get('http://localhost:1337/Materia')
      .subscribe(
        res => {
          const rjson: Materia[] = res.json();


          this.materias = rjson;



        },
        error => {
          console.log('error papu');
        }
      );
  }
  cargarProfesores(): void{

    this._http
      .get('http://localhost:1337/Profesor')
      .subscribe(
        res => {
          const rjson: Profesor[] = res.json();


          this.profesores = rjson;



        },
        error => {
          console.log('error papu');
        }
      );

  }
  cargarMateriaProfesor(): void{

    this._http
      .get('http://localhost:1337/MateriaProfesor')
      .subscribe(
        res => {
          const rjson: MateriaProfesor[] = res.json();


          this.materiaProfesor = rjson;



        },
        error => {
          console.log('error papu');
        }
      );

  }





}

