import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContactService } from "./services/contact.service";
import { Contact, ContactResume } from "./models/contact";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "agenda-angular";

  contacts: Contact[] = [];
  contactsResume: ContactResume[] = [];
  contact = {} as Contact;
  loading = true;

  deleteId = 10;

  contactNew: Contact = {
    nome: "Igor",
    email: "igost@email.com",
    celular: "81992334872",
    favorito: "S",
    ativo: "S",
  };

  updatedContact: Contact = {
    id: 10,
    nome: "Igor Atualizado",
    email: "igost@email.com",
    celular: "81992334872",
    favorito: "S",
    ativo: "S",
  };

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    // this.loadContacts();
    // this.loadContactsResume();
    // this.loadContactById(7);
    // this.addNewContact(this.contactNew);
    // this.updateContact(this.updatedContact);
    // this.deleteContact(10);
    // this.verificarNumero("81992436194");
  }

  // verificarNumero(numero: string) {
  //   this.contactService.checkPhoneExists(numero).subscribe({
  //     next: (contacts) => {

  //       this.loading = false;
  //       console.log(contacts);

  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  //}

  // loadContacts() {
  //   this.contactService.getContacts().subscribe({
  //     next: (contacts) => {
  //       this.contacts = contacts;
  //       this.loading = false;
  //       console.log(contacts);

  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  // }

  // loadContactsResume() {
  //   this.contactService.getContactsResume().subscribe({
  //     next: (contactsResume) => {
  //       this.contactsResume = contactsResume;
  //       this.loading = false;
  //       console.log(contactsResume);

  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  // }

  // loadContactById(id: number) {
  //     this.contactService.getContactById(id).subscribe({
  //     next: (contact) => {
  //       this.contact = contact;
  //       this.loading = false;
  //       console.log(contact);

  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  // }

  // addNewContact(newContact: Contact) {
  //     this.contactService.addContact(newContact).subscribe({
  //     next: (contact) => {
  //       this.contact = contact
  //       this.loading = false;
  //       console.log(contact);

  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  // }

  // updateContact(updatedContact: Contact) {
  //   this.contactService.updateContact(updatedContact).subscribe({
  //     next: () => {
  //       this.loading = false;
  //       console.log("Contato Atualizado")
  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  // }

  // deleteContact(id: number) {
  //   this.contactService.deleteContact(this.deleteId).subscribe({
  //     next: () => {
  //       this.loading = false;
  //       console.log("Contato Deletado")
  //     },
  //     error: (error) => {
  //       console.error('Erro ao carregar contatos:', error);
  //       this.loading = false;
  //     }
  //   });
  //}
}
