import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    
    CollapseModule.forRoot(),
  ], exports: [
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule,
    BsDropdownModule,
    CollapseModule
  ]
})
export class SharedModule { }
