import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user';
import { JsonPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, InputTextModule, ButtonModule, RippleModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user!: User;

  username= new FormControl('');
  email= new FormControl ('');
  password= new FormControl('');
  street= new FormControl ('');
  zipCode= new FormControl ('');
  city= new FormControl ('');

  submit() {
    this.user = new User();
    this.user.username = this.username.value as string;
    this.user.email = this.email.value as string;
    this.user.password = this.password.value as string;
    this.user.adress.street = this.street.value as string;
    this.user.adress.zipCode = this.zipCode.value as string;
    this.user.adress.city = this.city.value as string;
  }
}
