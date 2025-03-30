import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http'; // Importação necessária

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient// Adicione isso aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }