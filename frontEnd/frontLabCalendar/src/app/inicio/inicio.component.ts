import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  array:string[] = [

    'Jhonattan Javier ','Barriga Andrade',' MSc.',

    'Jhonattan Javier ','Barriga Andrade',' MSc.',

    'Marco Enrique ','Benalcázar Palacios',' PhD.',

    'Carlos Arturo Ramon ', 'Bonilla Javita', ' MSc. ',

    'Marco Danilo ','Burbano Acuña',' MSc.',

    'Tania Elizabeth ','Calle Jiménez',' MSc.',

    'Eduardo Mauricio ', 'Campaña Ortega', ' MSc. ',

    'Luis Fernando ','Carrasco Delhy',' MSc.',

    'Iván Marcelo ','Carrera Izurieta',' MSc.',

    'Santiago Roberto ','Carrillo Calderón',' MSc.',

    'Mayra del Cisne ','Carrión Toro',' MSc.',

    'Andrés Alejandro ','Cevallos López',' Ing.',

    'Santiago Roberto ', 'Cevallos Teran',' MSc. ',

    'Bernardino ','Chancusig Espín',' Ing.',

    'Marcos Raúl ','Córdova Bayas',' MSc.',

    'Vicente Adrián ','Eguez Sarzosa',' Ing.',

    'Denys Alberto ','Flores Armas',' MSc.',

    'Pamela Catherine ','Flores Naranjo',' PhD.',

    'Marco Sebastián ','Guerrero Flor',' MSc.',

    'María Asunción ','Hallo Carrasco',' PhD.',

    'Myriam Beatriz ','Hernández Álvarez',' PhD.',

    'Juan Alberto ','Herrera Silva',' MSc.',

    'María Monserrate ','Intriago Pazmiño',' MSc.',

    'Andrés Gabriel ','Jaramillo Yánez',' MSc.',

    'Enrique Andrés ','Larco Ampudia',' MSc.',

    'José Francisco ','Lucio Naranjo',' Phd.',

    'Daniel Alejandro ','Maldonado Ruiz', ' MSc. ',

    'Luis Enrique ','Mafla Gallegos',' PhD.',

    'Elisa Karina ','Mena Maldonado',' MSc.',

    'Carlos E. ','Montenegro Armas',' MSc.',

    'Evelyn Marcela ','Mosquera Espinosa',' Ing.',

    'Rosa del Carmen ','Navarrete Rueda',' MSc.',

    'Sheila Lorena ','Noboa Cruz',' MSc.',

    'Luis Miguel ','Orquera Andrade',' MSc.',

    'Henry Patricio ','Paz Arias',' MSc.',

    'Tania Mireya ','Pazmiño Santana',' MSc.',

    'Myriam Guadalupe ','Peñafiel Aguilar',' MSc.',

    'Diego Andrés ','Pérez Almeida',' Ing.',

    'María Gabriela ','Pérez Hernández',' MSc.',

    'Julio César ','Sandobalín Guamán',' MSc.',

    'Marco Oswaldo ','Santórum Gaibor',' PhD.',

    'Sandra Patricia ','Sánchez Gordón',' MSc.',

    'Sandra Patricia ','Sánchez Gordón',' MSc.',

    'Jenny Gabriela ','Torres Olmedo',' PhD.',

    'Jenny Gabriela ','Torres Olmedo',' PhD.',

    'Edgar Porfirio ','Torres Proaño',' MSc.',

    'Doris Karina ','Tutillo Sánchez',' Ing.',

    'Luz Marina ','Vintimilla Jaramillo',' MSc.',

    'Eddie Hans ','Yánez Quesada',' Ing.',

    'Patricio Xavier ','Zambrano Rodríguez',' MSc.',

    'Rodrigo Fabian ' ,'Chancusig Chuquilla' , ' MSc. ',

    'Henry Manolo ', 'Echeverria Culqui' , ' MSc. ',

    'Cesar Humberto ', 'Esquetini Caceres', ' MSc. ',

    'Walter Marcelo ','Fuertes Diaz', ' MSc. ',

    'Carlos Miguel ','Teran Villamarin', ' MSc. ',

    'Cesar Gustavo ', 'Samaniego Burbano', ' MSc. ',

    'Myriam ', 'Penafiel Aguilar', ' MSc. ',

    'Regina Maritzol ', 'Tenemaza Vera', ' MSc. ',

    'Cristina ', 'Acuña', ' MSc. ',

    'Miguel Angel ', 'Tualombo Rea', 'MSc.',

    'Maria Fernanda ', 'Jaramillo', 'MSc.',

    'Patricio ', 'Abad', 'MSc.',

    'Sebastian ', 'Guerrero', 'MSc.',

    'Jorge Eduardo ', 'Rivadeneira Muñoz','MSc.'




  ];
  arrayMateria:string[]=[
    'PLANES DE NEGOCIOS TIC ','SIC884',

    'ESTRUCTURAS DE DATOS ','SIC334',

    'MATEMATICAS DISCRETAS ','MAT304',

    'CCNA CISCO ','MAT001 ',

    'PROBABILIDAD Y ESTADISTICA BASICAS ','MAT234',

    'ALGORITMOS NUMERICOS ','SIC412',

    'GESTION DE PROYECTOS ','SIC434',

    'TCP/IP ','SIC516',

    'ADMINISTRACION DE BASE DE DATOS ','SIC744',

    'INGENIERIA DE SOFTWARE I ','SIC544',

    'ADMINISTRACION DE BASE DE DATOS ','SIC744',

    'FUNDAMENTOS DE CIENCIAS DE LA COMPUTACION ','ICO204',

    'SISTEMAS OPERATIVOS ','SIC414',

    'INTELIGENCIA DE NEGOCIOS ','SIC614',

    'CERTIFICACION EN GERENCIA DE SEGURIDAD DE INFORMACION ','SIC803',

    'GESTION DE TIC Y UNIDADES INFORMATICAS ','SIC826',

    'HABILIDADES DIRECTIVAS ','SIC774',

    'COMPUTACION DISTRIBUIDA ','SIC616',

    'REDES DE COMPUTADORAS ','SIC416',

    'INTELIGENCIA DE NEGOCIOS ','SIC614',

    'SISTEMAS DE COMUNICACION ','SIC314',

    'AUDITORIA Y EVALUACION DE SISTEMAS COMPUTACIONALES ','SIC816',

    'INTELIGENCIA ARTIFICIAL ','SIC524',

    'COMUNICACION ACADEMICA Y PROFESIONAL ','SIC343',

    'CLUBES ','ICLUB1',

    'ECOLOGIA Y MEDIO AMBIENTE ','EMA313',

    'PROGRAMACION I ','ICO106',

    'CALIDAD DE SOFTWARE ','SIC734',

    'DISEÑO DE PROCESOS ORGANIZACIONALES ','SIC623',

    'INGENIERIA DE SOFTWARE II ','SIC634',

    'ADMINISTRACION FINANCIERA ','SIC613',

    'ALGORITMOS NUMERICOS ','SIC412',

    'TALLER DE FORMULACION DE PROYECTOS DE TITULACION ','SIC812',

    'ESTRUCTURAS DE DATOS ','SIC334',

    'TECNOLOGIAS DE SEGURIDAD ','SIC514',

    'APLICACIONES MOVILES ','SIC764',

    'BASES DE DATOS ','SIC534',

    'APLICACIONES WEB ','SIC754',

    'GNU LINUX ', 'SIC854',

    'APLICACIONES EN AMBIENTES LIBRES ', 'SIC644' ,

    'APLICACIONES EN AMBIENTES PROPIETARIOS ', 'SIC554',

    'BASES DE DATOS DISTRIBUIDAS ','SIC 534',

    'ARQUITECTURA DE COMPUTADORES ', 'SIC316',

    'ALGORITMOS ', 'SIC324',

    'ADMINISTRACION DE SISTEMAS OPERATIVOS Y REDES ', 'SIC714',

    'COMPILADORES Y LENGUAJES ', 'SIC424',

    'CERTIFICACION PROFESIONAL ', 'SIC834',

    'PROGRAMACION II ', 'SIC216',

    'SEMINARIO PROFESIONAL IV ', 'SIC6A2',

    'LEGISLACION INFORMATICA ', 'ADM612',

    'TECNOLOGIAS WEB CON JAVASCRIPT ','SIC8B4',

    'SEMINARIO PROFESIONAL V', 'SIC666',

    'GESTION DE SEGURIDAD INFORMATICA ', 'SIC814'


  ];
  arrayModelos:string[]=[
    'Dell Torres', 'intel core i7' , '8GB',
    'Dell All-in-One', 'intel core i5', '4GB',
    'Apple iMac', 'intel core i5', '8GB'
  ];
  arrayLaboratorios:any[]=[
    'Beta', '302', '23',1,
    'Gamma', '303', '23',1,
    'Kappa', '306', '23',1,
    'Sigma', '307','23',1,
    'Lambda', '308','23',1,
    'Epsilon', '305','23',2,
    'Delta', '304','23', 3
  ];

  arrayMateriaProfesor:any[]=[


  ];

  profes:Profe[]=[];
  constructor(private _http:Http) { }

  ngOnInit() {

  }

  respaldar(): void{
    this.backProfes();
    this.backMaterias();
    this.backModelos();
    this.backLabos();
  }

  backProfes(){

    for (var i =0;i< this.array.length;i+=3){
      var prof : Profe=new Profe(this.array[i],this.array[i+1],this.array[i+2]);
      this.guardarProfe(prof);

    }
  }
  backMaterias(){
    for (var i =0;i< this.arrayMateria.length;i+=2){
      var mat : Mat=new Mat(this.arrayMateria[i],this.arrayMateria[i+1]);
      this.guardarMateria(mat);
      console.log(mat);

    }

  }
  backModelos(){
    for (var i =0;i< this.arrayModelos.length;i+=3){
      var mat : Modelo=new Modelo(this.arrayModelos[i],this.arrayModelos[i+1],this.arrayModelos[i+2]);
      this.guardarModelo(mat);

    }

  }
  backLabos(){
    for (var i =0;i< this.arrayLaboratorios.length;i+=4){
      var mat : Labo=new Labo(this.arrayLaboratorios[i],this.arrayLaboratorios[i+1],this.arrayLaboratorios[i+2],this.arrayLaboratorios[i+3]);
      this.guardarLabo(mat);

    }
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

}

class MateriaProfesor{
  constructor(
    public id?: number,
    public grupo?: string,
    public idMateria?: number,
    public idProfesor?: number,
    public editable?: boolean
  ){}

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
