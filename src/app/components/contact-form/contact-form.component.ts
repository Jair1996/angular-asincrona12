import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    phone: ['', [Validators.required, Validators.maxLength(9)]],
    asunto: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  getControl(control: string): FormControl {
    return this.contactForm.get(control) as FormControl;
  }

  sendMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      html: `
      <p>Nombre: ${this.contactForm.get('name')?.value}</p>
      <p>Correo: ${this.contactForm.get('email')?.value}</p>
      <p>Teléfono: ${this.contactForm.get('phone')?.value}</p>
      <p>Asunto: ${this.contactForm.get('asunto')?.value}</p>
      <p>Mensaje: ${this.contactForm.get('message')?.value}</p>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
    });

    this.contactForm.reset();
  }
}
