import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { ContactFormComponent } from "./components/shared/contact-form.component"
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    EditContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }