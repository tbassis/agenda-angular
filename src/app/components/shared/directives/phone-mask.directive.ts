import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PhoneMaskDirective),
    multi: true
  }]
})
export class PhoneMaskDirective implements ControlValueAccessor {
  private _value!: string;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const value = this.el.nativeElement.value;
    this._applyMask(value);
  }

  private _applyMask(value: string): void {
    // Remove tudo que não é dígito
    const cleanValue = value.replace(/\D/g, '');
    
    // Aplica a máscara: (99) 99999-9999
    let maskedValue = '';
    if (cleanValue.length > 0) {
      maskedValue = '(' + cleanValue.substring(0, 2);
      if (cleanValue.length > 2) {
        maskedValue += ') ' + cleanValue.substring(2, 7);
      }
      if (cleanValue.length > 7) {
        maskedValue += '-' + cleanValue.substring(7, 11);
      }
    }

    // Atualiza o valor exibido
    this.el.nativeElement.value = maskedValue;
    
    // Mantém o valor "limpo" no formControl
    this.onChange(cleanValue);
  }

  // Métodos do ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this._applyMask(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}