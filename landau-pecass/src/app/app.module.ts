import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './template/topo/topo.component';
import { HomeComponent } from './template/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TopoComponent,HomeComponent]
})
export class AppModule { }
