//Modulos
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';

//Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';





@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    PagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
