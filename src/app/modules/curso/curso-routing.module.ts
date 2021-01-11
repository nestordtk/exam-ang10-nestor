import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';

const routes: Routes = [
  {
    path:'',
    component:CursoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
