import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { WeekViewCalendarComponent } from './week-view-calendar/week-view-calendar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LabViewComponent } from './lab-view/lab-view.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarTableComponent } from './calendar-table/calendar-table.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import { CalendarTableCellComponent } from './calendar-table-cell/calendar-table-cell.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    WeekViewCalendarComponent,
    MainPageComponent,
    LabViewComponent,
    CalendarTableComponent,
    CalendarTableCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContextMenuModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/main-page',
        pathMatch: 'full'
      },
      {
        path: 'week-view-calendar',
        component: WeekViewCalendarComponent
      },
      {
        path: 'main-page',
        component: MainPageComponent
      },
      {
        path: 'lab-view',
        component: LabViewComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
