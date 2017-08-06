import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';
import {MateriaProfesor} from '../misClasses/interfazMateriaProfesor';
import {Laboratorio} from "../misClasses/interfazLaboratorio";
import {AgendaLaboratorio} from "../misClasses/interfazAgenda";
import {Materia} from "../misClasses/interfazMateria";
@Component({
  selector: 'app-calendar-table-cell',
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.css']
})
export class CalendarTableCellComponent implements OnInit {

  @Input()horaInicio: number;
  @Input()dia: number;
  @Input()selectLab: Laboratorio;

  @Input()labImplicado:string;
  @Input()diaImplicado:number;

  auxLab:Laboratorio;
  @Output() eventoRefresh = new EventEmitter();
  @ViewChild(ContextMenuComponent)

  public basicMenu: ContextMenuComponent;
  modelInicio;
  modelFin;
  fechaFin:Date;
  fechaInicio:Date;
  agenda:AgendaLaboratorio;
  materiaAsignada='';


  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  horaFin = 0;
  @Input()materiaprofesor: MateriaProfesor[];
  @Input()reboot:boolean;

  auxReboot:boolean;
  nuevaAgenda: AgendaLaboratorio;
  displayMateriaProfesor: string;
  closeResult: string;
 // agendas:AgendaLaboratorio[];



  ngOnInit() {
    this.auxReboot=this.reboot;

    console.log('hola');

    this.horaFin = this.horaInicio + 1;
    this.nuevaAgenda = new AgendaLaboratorio(this.horaInicio, this.selectLab);
    this.nuevaAgenda.dia=this.dia;
    this.nuevaAgenda.horaFin = this.horaFin;
    this.nuevaAgenda.fechaInicio=new Date();
    this.nuevaAgenda.fechaFin=new Date();


    this.displayMateriaProfesor = 'Sin Asignar';
    //this.cargarAgendas();
    console.log(this.selectLab.nombre);

    this.getMateriaGivenAgenda();
    this.auxLab=this.selectLab;
    this.refresh();
    this.setAgenda();

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

  getdia(numDia: number): string {
    return this.nombreDias[numDia - 1];
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

  setAgenda() {

    let url='http://localhost:1337/Lab/getAgenda?dia='+this.dia+
    '&idLaboratorio='+this.selectLab.id+
    '&horaInicio='+this.horaInicio+
    '&horaFin='+this.horaFin;

    this._http.get(url)
      .subscribe(
        res => {

  let rjson:AgendaLaboratorio = res.json();
  this.agenda = rjson;
  this.setMateriaProfesor();


        },
        err =>{
          console.log('error en getAgenda');
        }

      );

  }


  setMateriaProfesor(): void{
  for(var i =0;i<this.materiaprofesor.length;i++){
    if(this.materiaprofesor[i].id===this.agenda.idMateriaProfesor){
      this.agenda.idMateriaProfesor=this.materiaprofesor[i];

      return;
      }
    }
  }

  setAgendaMateriaProfesor(materiaprofesor: MateriaProfesor): void {
  this.displayMateriaProfesor = materiaprofesor.idMateria.nombre ;
  this.nuevaAgenda.idMateriaProfesor= materiaprofesor;

  }
  vacio (ingreso: any): boolean {
    return 'undefined' === typeof ingreso;
  }
  getSelectedLabName(lab: Laboratorio): string{
    if (this.vacio(lab)) {
      return 'No disponible';
    } else {
      return lab.nombre;
    }
  }

  validarAgenda():boolean{

    if(this.vacio(this.nuevaAgenda.idMateriaProfesor)||
      this.vacio(this.nuevaAgenda.idLaboratorio)||
        this.vacio(this.modelInicio)||this.vacio(this.modelFin)

    ){
      return false;

    }else return true;

  }

  guardarNuevaAgenda(): void {
    this.setFechaInicio();
    this.setFechaFin();
    this.refresh();
    this.nuevaAgenda.dia=this.dia;
    this.nuevaAgenda.idLaboratorio=this.selectLab;

    this._http
      .post('http://localhost:1337/AgendaLaboratorio/',this.nuevaAgenda)
      .subscribe(
        res => {
          console.log(res);
          this.getMateriaGivenAgenda();
          this.emitir();
        },
        err => {
          console.log('error ', err);
        }
      );
    this.agenda=this.nuevaAgenda;
    this.nuevaAgenda = new AgendaLaboratorio(this.horaInicio, this.selectLab);

    this.emitir();

  }
  emitir(){
    console.log('estoy emitiendo');
    this.eventoRefresh.emit(this.selectLab.nombre);
  }
  setFechaInicio(){
    this.fechaInicio=new Date(this.modelInicio.year,this.modelInicio.month-1,this.modelInicio.day);
    this.nuevaAgenda.fechaInicio=this.fechaInicio;
  }
 setFechaFin(){
    this.fechaFin=new Date(this.modelFin.year,this.modelFin.month-1,this.modelFin.day);
    this.nuevaAgenda.fechaFin=this.fechaFin;
 }

 getMateriaGivenAgenda(){

   let val = true;

   let url='http://localhost:1337/Lab/getMateriaGivenAgenda?dia='+this.dia+
     '&idLaboratorio='+this.selectLab.id+
     '&horaInicio='+this.horaInicio+
     '&horaFin='+this.horaFin;

   this._http
     .get(url)
     .subscribe(
       res=>{

try {
  let rjson: Materia = res.json();

  this.materiaAsignada = rjson.nombre;
  this.agenda = new AgendaLaboratorio();
  val=false;
}catch(e){

};


         return;
       },
       error=>{
         console.log('error');
       }
     );

   if(val)
   this.materiaAsignada='';



 }

 refresh():string{
   console.log('hola');

   if(this.auxLab.nombre!=this.selectLab.nombre){
     this.auxReboot=this.reboot;
     this.getMateriaGivenAgenda();
     this.auxLab=this.selectLab;
     return '';
   }
   else return '';
 }

 eliminarAgenda(){

   let url='http://localhost:1337/Lab/deleteAgenda?dia='+this.dia+
     '&idLaboratorio='+this.selectLab.id+
     '&horaInicio='+this.horaInicio+
     '&horaFin='+this.horaFin;

   this._http.get(url)
     .subscribe(
       res=>{
         console.log(JSON.stringify(res.json()));
       },
       err=>{
         console.log('error');
       }
     );
   this.agenda=undefined;
   this.materiaAsignada='';

 }





}




