import { Component, inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = ''; 

  readonly http = inject(HttpClient);
  readonly router = inject(Router);

  onRegister(email: string, password: string): void {
    this.http.post('http://localhost:3000/register', { email, password }).subscribe(
      () => {
        alert('Registrazione completata. Fai il login.');
        this.router.navigate(['/login']);
      },
      error => {
        alert(error.error.message || 'Errore di la registrazione.');
      }
    );

  }

}


