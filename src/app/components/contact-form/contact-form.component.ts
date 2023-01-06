import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.maxLength(9)]],
    asunto: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  isTheFieldInvalid(control: string) {
    return (
      this.contactForm.controls[control].errors &&
      this.contactForm.controls[control].touched
    );
  }
}
