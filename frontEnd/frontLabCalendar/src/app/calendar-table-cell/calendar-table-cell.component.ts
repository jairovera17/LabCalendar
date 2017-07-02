import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-calendar-table-cell',
  templateUrl: './calendar-table-cell.component.html',
  styleUrls: ['./calendar-table-cell.component.css']
})
export class CalendarTableCellComponent implements OnInit {

  @Input()hora: number;
  @Input()dia: number;
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  nombreDias: string[]= ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  closeResult: string;
  ngOnInit() {
  }
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Clczvosed with: ${result}`;
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
}
