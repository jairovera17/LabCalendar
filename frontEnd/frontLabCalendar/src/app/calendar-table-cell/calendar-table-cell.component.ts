import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Http} from '@angular/http';
import {MateriaProfesor} from '../misClasses/interfazMateriaProfesor';
import {Laboratorio} from "../misClasses/interfazLaboratorio";
@Component({
  selector: 'app-calendar-table-cell',
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.css']
})
export class CalendarTableCellComponent implements OnInit {

  @Input()hora: number;
  @Input()dia: number;
  @Input()selectedLab: Laboratorio;
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  horaFin = 0;
  materiaprofesor: MateriaProfesor[];
  nuevaAgenda: string;

  closeResult: string;
  ngOnInit() {
    this.horaFin = this.hora + 1;
    this.cargar();
  }
  constructor(private modalService: NgbModal, private _http: Http) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
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
  getAgenda(hora: number, dia: number): string {
    return 'ddddd';
  }

   gethorasRestantes(hora: number): number []{
    let horas = [];
    while (hora < 22) {
      hora++;
      horas.push(hora);


    }
    return horas;

  }
  buttonHora(event) {
    this.horaFin = event.target.value;
  }

  buttonAgendaMateria(event) {
    this.nuevaAgenda = event.target.value;
  }


  cargar() {
    console.log('cargando');
    this._http
      .get('http://localhost:1337/MateriaProfesor/')
      .subscribe(
        res => {
          const rjson: MateriaProfesor[] = res.json();
          this.materiaprofesor = rjson.map(
            (matprof: MateriaProfesor) => {
              console.log(matprof.materia.nombre + ' por ' + matprof.profesor.nombres);
              return matprof;
            }
          );
        },
        error => {
          console.log('error papu');
        }
      );
  }



}




