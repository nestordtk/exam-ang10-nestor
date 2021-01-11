import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyoutComponent } from './loyout/loyout.component';
import { HeaderComponent } from './loyout/header/header.component';
import { FooterComponent } from './loyout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AutorizacionComponent } from './modules/autorizacion/autorizacion/autorizacion.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoyoutComponent,
    HeaderComponent,
    FooterComponent,
    InstructorComponent,
    AutorizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

