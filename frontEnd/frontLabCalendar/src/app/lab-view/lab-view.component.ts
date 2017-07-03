import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-lab-view',
  templateUrl: './lab-view.component.html',
  styleUrls: ['./lab-view.component.css']
})
export class LabViewComponent implements OnInit {

//  materiaprofesor: MateriaProfesor[];
  constructor(private _http: Http) { }

  ngOnInit() {
  }


}

