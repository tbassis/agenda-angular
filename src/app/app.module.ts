import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactFormComponent } from "./components/shared/contact-form.component"

import { PhoneMaskDirective } from "./components/shared/directives/phone-mask.directive";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    EditContactComponent,
    AddContactComponent,
    ContactFormComponent,
    PhoneMaskDirective
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