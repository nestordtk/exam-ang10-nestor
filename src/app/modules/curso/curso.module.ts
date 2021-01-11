import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoDetailtPageComponent } from './pages/curso-detailt-page/curso-detailt-page.component';
import { CursocategcontainerComponent } from './components/cursocategcontainer/cursocategcontainer.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CursoDetailtPageComponent, CursocategcontainerComponent, CursoContainerComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule
  ]
})
export class CursoModule { }
