import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';
import {MateriaProfesor} from '../misClasses/interfazMateriaProfesor';
import {Laboratorio} from "../misClasses/interfazLaboratorio";
import {AgendaLaboratorio} from "../misClasses/interfazAgenda";
@Component({
  selector: 'app-calendar-table-cell',
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.css']
})
export class CalendarTableCellComponent implements OnInit {

  @Input()horaInicio: number;
  @Input()dia: number;
  @Input()selectLab: Laboratorio;
  @ViewChild(ContextMenuComponent)
  public basicMenu: ContextMenuComponent;
  modelInicio;
  modelFin;
  fechaFin:Date;
  fechaInicio:Date;

  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  horaFin = 0;
  @Input()materiaprofesor: MateriaProfesor[];
  nuevaAgenda: AgendaLaboratorio;
  displayMateriaProfesor: string;
  closeResult: string;


  ngOnInit() {
    this.horaFin = this.horaInicio + 1;
    this.nuevaAgenda = new AgendaLaboratorio(this.horaInicio, this.selectLab);
    this.nuevaAgenda.horaFin = this.horaFin;
    this.nuevaAgenda.fechaInicio=new Date();
    this.nuevaAgenda.fechaFin=new Date();


    this.displayMateriaProfesor = 'Sin Asignar';


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
  guardarNuevaAgenda(): void {
    this.setFechaInicio();
    this.setFechaFin();

    this._http
      .post('http://localhost:1337/AgendaLaboratorio/',this.nuevaAgenda)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('error ', err);
        }
      );

  }
  setFechaInicio(){
    this.fechaInicio=new Date(this.modelInicio.year,this.modelInicio.month-1,this.modelInicio.day);
    this.nuevaAgenda.fechaInicio=this.fechaInicio;
  }
 setFechaFin(){
    this.fechaFin=new Date(this.modelFin.year,this.modelFin.month-1,this.modelFin.day);
    this.nuevaAgenda.fechaFin=this.fechaFin;
 }



}




