import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { ContactFormComponent } from "../../shared/components/contact-form.component"
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
  celularExiste = false;
	
  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onFormSubmit(contactData: any) {
    this.submitting = true;
    this.celularExiste = false; // Resetar estado anterior

    // Primeiro verifica o telefone
    this.contactService.checkPhoneExists(contactData.celular).subscribe({
      next: (response) => {
        console.log(response.existe);
        
        if (response.existe) {
          this.celularExiste = true;
          this.submitting = false;
        } else {
          // Se não existe, prossegue com o cadastro
          this.addNewContact(contactData);
        }
      },
      error: (error) => {
        console.error('Erro na verificação:', error);
        this.submitting = false;
      }
    });
  }

  private addNewContact(contactData: any) {
    this.contactService.addContact(contactData).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro ao adicionar:', error);
        this.submitting = false;
      }
    });
  }
}