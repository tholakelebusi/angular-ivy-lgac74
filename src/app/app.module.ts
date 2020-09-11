import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from '../app-routing/app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {EmployeelistComponent} from '../employeelist/employeelist.component'
import {ProjectComponent} from '../project/project.component';
import {NewemployeeComponent} from '../newemployee/newemployee.component';


@NgModule({
  imports:[BrowserModule,AppRoutingModule,FormsModule,RouterModule],

  declarations:[ AppComponent,HelloComponent,EmployeelistComponent,ProjectComponent,NewemployeeComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
