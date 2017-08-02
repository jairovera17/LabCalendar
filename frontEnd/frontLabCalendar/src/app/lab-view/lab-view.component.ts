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

    this.nuevaMateria = new Materia();
    this.nuevaMateria.editable=false;

    this.blankNuevaMateriaProfesor();



  }
  blankNuevaMateriaProfesor(): void{
    this.nuevaMateriaProfesor = new MateriaProfesor();
    this.nuevaMateriaProfesor.editable=false;

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
  borrarNuevaMateria(): void{
    this.inputNuevaMateria=false;
    this.nuevaMateria=new Materia();
    this.nuevaMateria.editable=false;
  }
  borrarNuevaMateriaProfesor(): void{
    this.inputNuevaMateriaProfesor=false;
    this.nuevaMateriaProfesor=new MateriaProfesor();
    this.nuevaMateriaProfesor.editable=false;
  }
  vacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }

  getMateria(matprof:MateriaProfesor): string{
    if(this.vacio(matprof))
      return 'Sin Especificar xx';
    else{
      if(this.vacio(matprof.idMateria))
        return 'Sin Especificar Materia';
      else
        return matprof.idMateria.nombre+' '+matprof.idMateria.codigo;
    }
  }

  getProfesor(matprof: MateriaProfesor): string{
    if(this.vacio(matprof))
      return 'Sin especificar';
    else{
      if(this.vacio(matprof.idProfesor))
        return 'Sin Especificar Profesor';
      else return matprof.idProfesor.nombres+''+matprof.idProfesor.apellidos;
    }

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

  validarMateria(mat: Materia): boolean{
    if (this.vacio(mat.codigo)||this.vacio(mat.nombre))
      return false;
    else{
      if(mat.codigo.length<4||mat.nombre.length<4)
        return false;
      else return true;
    }
  }

  validarMateriaProfesor(matprof:MateriaProfesor): boolean{
    if(this.vacio(matprof))
      return false;
    else{
      if(this.vacio(matprof.idProfesor)||this.vacio(matprof.idMateria)||this.vacio(matprof.grupo))
        return false;
      else{
        if(matprof<1)
          return false;
        else return true;
      }

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

          this.borrarNuevoProfesor();


          },
          error => {
            console.log('error papu');
          }
        );
    }
  }

  guardarNuevaMateria(): void {
    if(this.validarMateria(this.nuevaMateria)){
      this._http
        .post('http://localhost:1337/Materia',this.nuevaMateria)
        .subscribe(
          res=> {
            const rjson: Materia = res.json();
            console.log(JSON.stringify(rjson));
            this.materias.push(this.nuevaMateria);
            this.borrarNuevaMateria();
          }
        );

    }
  }
  guardarNuevaMateriaProfesor(): void{
    if(this.validarMateriaProfesor(this.nuevaMateriaProfesor)){
      this._http
        .post('http://localhost:1337/MateriaProfesor',this.nuevaMateriaProfesor)
        .subscribe(
          res=> {
            const rjson: MateriaProfesor = res.json();
            console.log('se guardo materia profesor');
            this.materiaProfesor.push(this.nuevaMateriaProfesor);
            this.borrarNuevaMateriaProfesor();
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

  eliminarMateria(mat : Materia): void{
    this._http
      .delete('http://localhost:1337/Materia/'+mat.id)
      .subscribe(
        res => {
          const rjson: Materia = res.json();
          console.log(JSON.stringify(rjson));
          let indice = this.materias.indexOf(mat);
          this.materias.splice(indice,1);
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

  editarMateria(mat:Materia): void{
    this._http
      .put('http://localhost:1337/Materia/'+mat.id,mat)
      .subscribe(
        res => {
          const rjson: Materia = res.json();
          console.log(JSON.stringify(rjson));


        },
        error => {
          console.log('error papu');
        }
      );
  }

  eliminarMateriaProfesor(matprof: MateriaProfesor){
    this._http
      .delete('http://localhost:1337/MateriaProfesor/'+matprof.id)
      .subscribe(
        res => {
          const rjson: MateriaProfesor = res.json();
          console.log('se ha borrado materia profesor');
          let indice = this.materiaProfesor.indexOf(matprof);
          this.materiaProfesor.splice(indice,1);
        },
        error => {
          console.log('error papu');
        }
      );
  }


}

