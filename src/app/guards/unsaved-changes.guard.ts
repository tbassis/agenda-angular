import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormCanDeactivate } from './form-can-deactivate.interface';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<FormCanDeactivate> {
  canDeactivate(
    component: FormCanDeactivate
  ): boolean | Observable<boolean> {
    console.log(component.canDeactivate);
    
    // Verifica se o componente implementou a lógica
    if (!component.canDeactivate) {
      return true;
    }

    // Chama o método do componente para verificar alterações
    const canDeactivate = component.canDeactivate();

    // Se retornar true, permite a navegação
    if (canDeactivate) {
      return true;
    }

    // Lógica específica para cada fluxo
    if (component.formMode === 'add') {
      return this.handleCreateFlow(component.contactForm);
    } else {
      return this.handleEditFlow(component.contactForm, component.initialData);
    }
  }

  private handleCreateFlow(form: FormGroup): boolean {
    // Se o formulário NÃO foi tocado, permite sair
    if (form.pristine) {
      return true;
    }
    // Pergunta ao usuário se deseja sair
    return confirm('O formulário de criação foi modificado. Deseja realmente sair?');
  }

  private handleEditFlow(form: FormGroup, initialData: any): boolean {
    // Compara os valores atuais com os iniciais
    const hasChanges = JSON.stringify(form.value) !== JSON.stringify(initialData);
    
    // Se não houver alterações, permite sair
    if (!hasChanges) {
      return true;
    }
    // Pergunta ao usuário se deseja sair
    return confirm('Há alterações não salvas. Deseja realmente sair?');
  }
}