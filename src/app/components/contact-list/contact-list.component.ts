import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactResume } from '../../models/contact';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
})
export class ContactListComponent implements OnInit {
  contacts: ContactResume[] = [];
  filteredContacts: ContactResume[] = [];
  searchTerm: string = '';
  loading = true;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContactsResume().subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.filteredContacts = [...contacts];
        this.loading = false;        
      },
      error: (error) => {
        console.error('Erro ao carregar lista de contatos:', error);
        this.loading = false;
      }
    });
  }

  applyFilter() {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredContacts = this.contacts.filter(contact => {
      return contact.nome.toLowerCase().includes(searchTermLower) ||
             contact.email.toLowerCase().includes(searchTermLower) ||
             contact.celular.includes(this.searchTerm);
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