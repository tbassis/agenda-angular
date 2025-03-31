import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { ContactFormComponent } from "../shared/contact-form.component"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
	imports: [
		ContactFormComponent,
		CommonModule,
		FormsModule
	],
})
export class AddContactComponent {
	submitting = false;
	
  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onFormSubmit(contactData: any) {
    this.submitting = true; // Ativa o estado de carregamento
    
    this.contactService.addContact(contactData).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro ao adicionar contato:', error);
        this.submitting = false; // Desativa o estado em caso de erro
      }
    });
  }
}