import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface FormCanDeactivate {
  // Modo do formulário: 'create' ou 'edit'
  formMode: 'add' | 'edit';
  // Formulário a ser monitorado
  contactForm: FormGroup;
  // Dados iniciais (apenas para modo 'edit')
  initialData?: any;
  // Método obrigatório para verificação
  canDeactivate: () => boolean | Observable<boolean>;
}
