import { Routes } from "@angular/router";
import { ContactListComponent } from "./components/contact-list/contact-list.component"
import { EditContactComponent } from "./components/edit-contact/edit-contact.component"

export const routes: Routes = [
	{ path: "", title: "Listagem de contatos", component: ContactListComponent },
	{ path: "edit/:id", title: "Editar contato", component: EditContactComponent}
];
