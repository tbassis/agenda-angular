import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { ContactFormComponent } from "./shared/components/contact-form.component";

import { PhoneMaskDirective } from "./shared/directives/phone-mask.directive";
import { UnsavedChangesGuard } from "./guards/unsaved-changes.guard";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    EditContactComponent,
    AddContactComponent,
    ContactFormComponent,
    PhoneMaskDirective,
  ],
  imports: [BrowserModule, HttpClient, ReactiveFormsModule, AppRoutingModule],
  providers: [UnsavedChangesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
