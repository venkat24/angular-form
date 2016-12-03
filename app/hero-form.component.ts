import { Component } from '@angular/core';
import { Hero }      from './hero';
@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
  genders = ['Male','Female'];
  students = ['Yes','No']
  model = new Hero('Venkatraman Srikanth', this.genders[0],0, 'Venkat',);
  submitted = false;
  onSubmit() { this.submitted = true; };
  get diagnostic() { return JSON.stringify(this.model); }
}
