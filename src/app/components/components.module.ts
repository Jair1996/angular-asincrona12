import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IsValidDirective } from '../directives/is-valid.directive';



@NgModule({
  declarations: [
    ContactFormComponent,
    IsValidDirective
  ],
  exports: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
