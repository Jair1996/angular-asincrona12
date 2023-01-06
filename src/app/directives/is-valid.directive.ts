import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isValid]'
})
export class IsValidDirective implements OnChanges{
  @Input() invalid!: boolean | undefined;
  $element = this.elementRef.nativeElement as HTMLInputElement

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.invalid) {
      this.$element.classList.add('border-red-500')
    } else {
      this.$element.classList.remove('border-red-500')
    }
  }
}
