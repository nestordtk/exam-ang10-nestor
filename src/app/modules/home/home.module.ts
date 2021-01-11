import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursodestacadocontainerComponent } from './components/cursodestacadocontainer/cursodestacadocontainer.component';
import { HeaderComponent } from './components/header/header.component';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorService } from './services/instructor.service';
import { InstructorcontainerComponent } from './components/instructorescontainer/instructorescontainer.component';



@NgModule({
  declarations: [HomeComponent, CursodestacadocontainerComponent, HeaderComponent, InstructorcontainerComponent, InstructorcontainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[InstructorService]

})
export class HomeModule { }
