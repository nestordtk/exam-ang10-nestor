import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoDetailtPageComponent } from './pages/curso-detailt-page/curso-detailt-page.component';
import { CursocategcontainerComponent } from './components/cursocategcontainer/cursocategcontainer.component';


@NgModule({
  declarations: [CursoDetailtPageComponent, CursocategcontainerComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
