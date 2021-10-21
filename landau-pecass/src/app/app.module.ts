import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CadastroComponent } from './cadastro/cadastro.component';
=======
import { TopoComponent } from './template/topo/topo.component';
import { HomeComponent } from './template/home/home.component';
>>>>>>> c7b79eb88a7bfc1ccdf4a20cc4d1bf1a9ad9f323

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CadastroComponent
=======
    TopoComponent,
    HomeComponent
>>>>>>> c7b79eb88a7bfc1ccdf4a20cc4d1bf1a9ad9f323
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TopoComponent,HomeComponent]
})
export class AppModule { }
