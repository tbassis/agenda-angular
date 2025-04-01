import { Component, OnInit } from "@angular/core";
import { ContactService } from "../../services/contact.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Contact } from "../../models/contact";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactFormComponent } from "../../shared/components/contact-form.component";
import { CanDeactivateComponent } from "../../guards/unsaved-changes.guard";

@Component({
  standalone: true,
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  imports: [CommonModule, FormsModule, ContactFormComponent],
})
export class EditContactComponent implements OnInit, CanDeactivateComponent {
  contact!: Contact;
  loading = true;
  submitting = false;
  hasUnsavedChange: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getContactData(id);
  }

  getContactData(id: number) {
    this.contactService.getContactById(id).subscribe({
      next: (contact) => {
        this.contact = contact;
        this.loading = false;
      },
      error: (error) => {
        console.error("Erro ao carregar contato:", error);
        this.loading = false;
      },
    });
  }

  onFormUpdated(formUpdated: boolean) {
    console.log(formUpdated);

    this.hasUnsavedChange = formUpdated;
  }

  onFormSubmit(updatedContact: Contact) {
    this.hasUnsavedChange = false;
    this.submitting = true;

    this.contactService.updateContact({ ...updatedContact, id: this.contact.id }).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.error("Erro ao atualizar contato:", error);
        this.submitting = false;
      },
    });
  }
}
