import { Directive, ElementRef, HostListener, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Directive({
  selector: "[appPhoneMask]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneMaskDirective),
      multi: true,
    },
  ],
})
export class PhoneMaskDirective implements ControlValueAccessor {
  private _value!: string;

  @Input() appPhoneMask: "cel" | "tel" = "cel";

  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"])
  onInput(event: Event): void {
    const value = this.el.nativeElement.value;
    this._applyMask(value);
  }

  private _applyMask(value: string): void {
    // Remove tudo que não é dígito
    let maskedValue = "";
    const cleanValue = value.replace(/\D/g, "");

    // Define os padrões com base no tipo
    const isCel = this.appPhoneMask === "cel";
    const maxLength = isCel ? 11 : 10;

    // Aplica máscara conforme o tipo
    if (cleanValue.length > 0) {
      maskedValue = "(" + cleanValue.substring(0, 2);

      if (cleanValue.length > 2) {
        const part1End = isCel ? 7 : 6;
        const part2End = isCel ? 11 : 10;

        maskedValue += ") " + cleanValue.substring(2, part1End);

        if (cleanValue.length > part1End) {
          maskedValue += "-" + cleanValue.substring(part1End, part2End);
        }
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
