import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { WeekViewCalendarComponent } from './week-view-calendar/week-view-calendar.component';
import { LabFootComponent } from './lab-foot/lab-foot.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    WeekViewCalendarComponent,
    LabFootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
