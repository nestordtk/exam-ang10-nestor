import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Cursos22Component } from './cursos22/cursos22.component';


@NgModule({
  declarations: [Cursos22Component],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
