import { Routes } from "@angular/router";

import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

import { ContactListComponent } from "./components/contact-list/contact-list.component"
import { EditContactComponent } from "./components/edit-contact/edit-contact.component"
import { AddContactComponent } from "./components/add-contact/add-contact.component";

export const routes: Routes = [
	{ path: "", title: "Listagem de contatos", component: ContactListComponent },
	{ path: "edit/:id", title: "Editar contato", component: EditContactComponent, },
	{ path: "add", title: "Adicionar contato", component: AddContactComponent, canDeactivate: [UnsavedChangesGuard] }
];
