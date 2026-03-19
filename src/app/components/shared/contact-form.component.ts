import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../../models/contact';
import { PhoneMaskDirective } from "./directives/phone-mask.directive"
import { FormCanDeactivate } from "../../guards/form-can-deactivate.interface"

@Component({
  standalone: true,
  selector: 'contact-form-component',
  templateUrl: './contact-form.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PhoneMaskDirective
  ],
})
export class ContactFormComponent implements FormCanDeactivate {
  @Input() initialData: Contact | null = null;
  @Input() formMode: 'add' | 'edit' = 'add'; // Define o fluxo
  @Input() submitting: boolean = false;
  @Output() formSubmitted = new EventEmitter<Contact>();

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      telefone: [''],
      favorito: ['N', Validators.required]
    });
  }

  canDeactivate(): boolean {
    return false; // verificação realizada no guard
  }

  // Getter/Setter para o checkbox
  get favoriteCheckbox(): boolean {
    return this.contactForm.get('favorito')?.value === 'S';
  }

  set favoriteCheckbox(value: boolean) {
    this.contactForm.get('favorito')?.setValue(value ? 'S' : 'N');
  }

  onFavoriteCheckboxChange(event: Event) {
    this.favoriteCheckbox = (event.target as HTMLInputElement).checked;
  }

  ngOnChanges() {
    if (this.initialData) {
      this.contactForm.patchValue({
        ...this.initialData,
        favorito: this.initialData.favorito || 'N' // Default para 'N'
      });
    }
  }

  onSubmit() {
    
    if (this.contactForm.valid) {
      const formData = {
        ...this.contactForm.value,
        favorito: this.contactForm.value.favorito
      };
      this.formSubmitted.emit(formData);
    }
  }
}
