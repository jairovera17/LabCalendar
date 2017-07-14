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

  inputNuevoProfesor:boolean;
  inputNuevaMateria:boolean;
  inputNuevaMateriaProfesor:boolean;

  nuevoProfesor:Profesor;
  nuevaMateria:Materia;
  nuevaMateriaProfesor:MateriaProfesor;

  constructor(private _http: Http) { }

  ngOnInit() {


    this.cargar();
    this.falsearTodo();
    this.inputNuevoProfesor=false;
    this.nuevoProfesor = new Profesor();
    this.nuevoProfesor.editable=false;
    this.nuevoProfesor.ultimoTitulo="Ing";


  }

  falsearTodo(){
    this.showLabs = false;
    this.showProfesores = false;
    this.showMaterias = false;
    this.showMateriaProfesor = false;

    this.inputNuevoProfesor=false;
    this.inputNuevaMateria=false;
    this.inputNuevaMateriaProfesor=false;
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


          this.profesores = rjson.map(
            (prof: Profesor)=>{
              prof.editable=false;
              return prof;
            }
          );



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

  borrarNuevoProfesor(): void{
    this.inputNuevoProfesor=false;
    this.nuevoProfesor = new Profesor();
    this.nuevoProfesor.editable=false;
    this.nuevoProfesor.ultimoTitulo="Ing";

  }
  vacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }

  validarProfesor(prof: Profesor): boolean{
    if (this.vacio(prof.nombres)||this.vacio(prof.apellidos))
      return false;
    else{
      if(prof.nombres.length<4||prof.apellidos.length<4)
        return false;
      else return true;
    }


  }

  guardarNuevoProfesor(): void{
    if(this.validarProfesor(this.nuevoProfesor)){
      this._http
        .post('http://localhost:1337/Profesor',this.nuevoProfesor)
        .subscribe(
          res => {
            const rjson: Profesor = res.json();


           console.log(JSON.stringify(rjson));

           this.profesores.push(this.nuevoProfesor);




          },
          error => {
            console.log('error papu');
          }
        );
    }
  }

  eliminarProfesor(prof: Profesor): void{
    this._http
      .delete('http://localhost:1337/Profesor/'+prof.id)
      .subscribe(
        res => {
          const rjson: Profesor = res.json();
          console.log(JSON.stringify(rjson));
          let indice = this.profesores.indexOf(prof);
          this.profesores.splice(indice,1);
        },
        error => {
          console.log('error papu');
        }
      );
  }

  editarProfesor(prof: Profesor): void{

    this._http
      .put('http://localhost:1337/Profesor/'+prof.id,prof)
      .subscribe(
        res => {
          const rjson: Profesor = res.json();


          console.log(JSON.stringify(rjson));


        },
        error => {
          console.log('error papu');
        }
      );
  }



}

