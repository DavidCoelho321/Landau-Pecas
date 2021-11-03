import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastroComponent } from './cadastro/cadastro.component';

import { TopoComponent } from './template/topo/topo.component';
import { HomeComponent } from './template/home/home.component';
import { LoguinComponent } from './loguin/loguin.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    TopoComponent,
    HomeComponent,
    LoguinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TopoComponent]
})
export class AppModule { }
