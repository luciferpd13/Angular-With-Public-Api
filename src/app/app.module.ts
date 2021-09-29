import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './dogs/dogs.component';
import { DogbreedComponent } from './dogbreed/dogbreed.component'

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogbreedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
