import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ContactResume } from '../../models/contact';

@Component({
  standalone: true,
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  imports: [
    CommonModule
  ],
})
export class ContactListComponent implements OnInit {
  contacts: ContactResume[] = [];
  loading = true;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContactsResume().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.loading = false;
        console.log(contacts);
        
      },
      error: (error) => {
        console.error('Erro ao carregar lista de contatos:', error);
        this.loading = false;
      }
    });
  }

  deleteContact(id: number) {
    if (confirm('Tem certeza que deseja excluir permanentemente este contato?')) {
      this.contactService.deleteContact(id).subscribe({
        next: () => {
          this.contacts = this.contacts.filter(contact => contact.id !== id);
        },
        error: (error) => console.error('Erro ao excluir contato:', error)
      });
    }
  }
}