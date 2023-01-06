import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[isValid]',
})
export class IsValidDirective implements OnInit {
  @Input() control!: FormControl;

  $element = this.elementRef.nativeElement as HTMLInputElement;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.control.valueChanges.subscribe((_) => {
      this.changeColorIfIsInvalid();
    });
  }

  @HostListener('blur') onBlur() {
    this.changeColorIfIsInvalid();
  }

  changeColorIfIsInvalid() {
    if (this.control.invalid) {
      this.$element.classList.add('border-red-500', 'focus:border-red-600');
      this.$element.classList.remove('border-blue-500');
    } else {
      this.$element.classList.remove('border-red-500', 'focus:border-red-600');
      this.$element.classList.add('border-blue-500');
    }
  }
}
