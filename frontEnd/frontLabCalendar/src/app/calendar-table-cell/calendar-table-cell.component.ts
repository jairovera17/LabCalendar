import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';
import {MateriaProfesor} from '../misClasses/interfazMateriaProfesor';
import {Laboratorio} from "../misClasses/interfazLaboratorio";
import {AgendaLaboratorio} from "../misClasses/interfazAgenda";
import {Materia} from "../misClasses/interfazMateria";
import {isNullOrUndefined} from "util";
@Component({
  selector: 'app-calendar-table-cell',
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.css']
})
export class CalendarTableCellComponent implements OnInit {



  @Input()horaInicio: number;
  @Input()dia: number;
  @Input()selectLab: Laboratorio;
  @Input()semanaInicio: Date;
  @Input()semanaFin: Date;

  auxLab:Laboratorio;
  auxSemanaInicio:Date;
  auxSemanaFin:Date;
  @Output() eventoRefresh = new EventEmitter();
  @ViewChild(ContextMenuComponent)

  public basicMenu: ContextMenuComponent;
  modelInicio;
  modelFin;
  fechaFin:Date;
  fechaInicio:Date;
  agenda:AgendaLaboratorio;



  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  horaFin = 0;
  @Input()materiaprofesor: MateriaProfesor[];
  @Input()reboot:boolean;

  auxReboot:boolean;
  nuevaAgenda: AgendaLaboratorio;
  displayMateriaProfesor: string;
  closeResult: string;
  workingMateriaProfesor: MateriaProfesor;
  //no borrar
 // agendas:AgendaLaboratorio[];



  ngOnInit() {
    this.auxLab=this.selectLab;
    this.auxReboot=this.reboot;
    this.auxSemanaInicio=this.semanaInicio;
    this.auxSemanaFin=this.semanaFin;
    this.horaFin = this.horaInicio + 1;
    this.nuevaAgenda = new AgendaLaboratorio(this.horaInicio, this.selectLab);
    this.nuevaAgenda.dia=this.dia;
    this.nuevaAgenda.horaFin = this.horaFin;


    this.nuevaAgenda.fechaInicio=new Date();
    this.nuevaAgenda.fechaFin=new Date();

    this.getAgenda();
  }
  constructor(private modalService: NgbModal, private _http: Http) {}

  open(content) {

    this.modalService.open(content,{size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getDiaNombre(numDia: number): string {
    return this.nombreDias[numDia];
  }

  gethorasRestantes(hora: number): number []{
    let horas = [];
    while (hora < 22) {
      hora++;
      horas.push(hora);


    }
    return horas;

  }


  setHoraFin(event) {
    this.horaFin = event.target.value;
    this.nuevaAgenda.horaFin = this.horaFin;
  }

  setAgendaMateriaProfesor(materiaprofesor: MateriaProfesor): void {
    this.displayMateriaProfesor = materiaprofesor.idMateria.nombre+' GR: '+materiaprofesor.grupo ;
    this.nuevaAgenda.idMateriaProfesor= materiaprofesor;

  }

  isVacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }

  getSelectedLabName(lab: Laboratorio): string{
    if (this.isVacio(lab)) {
      return 'No disponible';
    } else {
      return lab.nombre;
    }
  }

  validarAgenda():boolean{

    if(this.isVacio(this.nuevaAgenda.idMateriaProfesor)||
      this.isVacio(this.nuevaAgenda.idLaboratorio)||
      this.isVacio(this.modelInicio)||
      this.isVacio(this.modelFin)

    ){
      return false;

    }else return true;

  }

  setFechaInicio(){
    this.fechaInicio=new Date(this.modelInicio.year,this.modelInicio.month-1,this.modelInicio.day);
    this.nuevaAgenda.fechaInicio=this.fechaInicio;
  }

  setFechaFin(){
    this.fechaFin=new Date(this.modelFin.year,this.modelFin.month-1,this.modelFin.day);
    this.nuevaAgenda.fechaFin=this.fechaFin;
  }


  getMateriaProfesorFromAgenda(){
    let url = 'http://localhost:1337/MateriaProfesor/'+this.agenda.idMateriaProfesor;
    console.log(JSON.stringify(this.agenda));
    this._http.get(url)
      .subscribe(
        res => {

          let rjson: MateriaProfesor = res.json();
          this.agenda.idMateriaProfesor=rjson;
          this.workingMateriaProfesor=rjson;

        },
        err =>{
          console.log('error en getAgenda');
        }
      );
  }

  getAgenda() {

    let url='http://localhost:1337/Lab/getAgenda?dia='+this.dia+
    '&idLaboratorio='+this.selectLab.id+
    '&horaInicio='+this.horaInicio+
    '&horaFin='+this.horaFin+
    '&semanaInicio='+this.semanaInicio+
     '&semanaFin='+this.semanaFin
    ;
    if(this.horaInicio===7&&this.dia===0)
      console.log(url);

    this._http.get(url)
      .subscribe(
        res => {
try {
  let rjson: AgendaLaboratorio = res.json();
  this.agenda = rjson;
 return this.getMateriaProfesorFromAgenda();
}catch (e){

}

        },
        err =>{
          console.log('error en getAgenda');
        }

      );

  return;

  }

  guardarNuevaAgenda(): void {
    this.setFechaInicio();
    this.setFechaFin();

    this.nuevaAgenda.dia=this.dia;
    this.nuevaAgenda.idLaboratorio=this.selectLab;

    console.log('gardando agenda'+JSON.stringify(this.nuevaAgenda));
    this._http
      .post('http://localhost:1337/AgendaLaboratorio/',this.nuevaAgenda)
      .subscribe(
        res => {
          console.log('vales vrgggggggggg');

        },
        err => {
          console.log('error ', err);
        }
      );


    this.emitir();

  }

  emitir(){
    console.log('estoy emitiendo');
    this.eventoRefresh.emit(null);
  }

 refresh(){

   if(this.auxLab.nombre!=this.selectLab.nombre||
     this.auxReboot!=this.reboot||
   this.auxSemanaInicio!=this.semanaInicio||
   this.auxSemanaFin!=this.semanaFin){

     console.log('estoy refrescando');

  this.agenda=undefined;
  this.workingMateriaProfesor=undefined;
     this.auxReboot=this.reboot;
     this.auxLab=this.selectLab;
     this.auxSemanaInicio=this.semanaInicio;
     this.auxSemanaFin=this.semanaFin;

    return this.getAgenda();
   }
 }

 eliminarAgenda(){

   let url='http://localhost:1337/Lab/deleteAgenda?dia='+this.dia+
     '&idLaboratorio='+this.selectLab.id+
     '&horaInicio='+this.horaInicio+
     '&horaFin='+this.horaFin;

   this._http.get(url)
     .subscribe(
       res=>{
         console.log('se ha eliminado una agenda prrro :v',JSON.stringify(res.json()));

       },
       err=>{
         console.log('error');
       }
     );

   this.emitir();




 }



 getWorkingMateria(): string{
  if(this.workingMateriaProfesor){
    return this.workingMateriaProfesor.idMateria.nombre +' GR '+this.workingMateriaProfesor.grupo;
  }
  else return '';

 }




}




