import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumadorComponent } from './sumador/sumador.component';
import { RestadorComponent } from './restador/restador.component';

@NgModule({
  declarations: [
    AppComponent,
    SumadorComponent,
    RestadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
