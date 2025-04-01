import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeactivateComponent {
	hasUnsavedChange: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<CanDeactivateComponent> {
	canDeactivate(component: CanDeactivateComponent): boolean {
		return component.hasUnsavedChange ? confirm('Você tem alterações não salvas. Deseja realmente sair?') : true;
	}
}