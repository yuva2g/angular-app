import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';

import {CsvToJsonService} from './csv-to-json.service'

@NgModule({
  declarations: [
    AppComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule
  ],
  providers: [CsvToJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
