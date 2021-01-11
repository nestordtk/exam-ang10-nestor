import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoyoutComponent } from './loyout/loyout.component';
import { HeaderComponent } from './loyout/header/header.component';
import { FooterComponent } from './loyout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AutorizacionComponent } from './modules/autorizacion/autorizacion/autorizacion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoyoutComponent,
    HeaderComponent,
    FooterComponent,
    AutorizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

