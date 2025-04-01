import { Routes } from "@angular/router";

import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { UnsavedChangesGuard } from "./guards/unsaved-changes.guard";

export const routes: Routes = [
  { path: "", title: "Listagem de contatos", component: ContactListComponent },
  {
    path: "editar-contato/:id",
    title: "Editar contato",
    component: EditContactComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
  {
    path: "adicionar-contato",
    title: "Adicionar contato",
    component: AddContactComponent,
    canDeactivate: [UnsavedChangesGuard],
  },
];
