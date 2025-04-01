import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Contact, ContactResume } from "../models/contact";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private apiUrl = "http://localhost:8080/api/contatos";

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContactsResume(): Observable<ContactResume[]> {
    return this.http.get<ContactResume[]>(`${this.apiUrl}/resumo`);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  checkPhoneExists(celular: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/verificar-numero/${celular}`);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  updateContact(updatedContact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${updatedContact.id}`, updatedContact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
