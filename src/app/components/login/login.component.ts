import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { AuthResponse } from '../../models/auth-response.type';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  readonly http = inject(HttpClient);
  readonly router = inject(Router);

  email: string = '';
  password: string = ''; 

  onLogin(email: string, password: string): void {
    this.http.post<AuthResponse>('http://localhost:3000/login', { email, password }).pipe(
      catchError((res) => {
        alert(res.error);
        return of(null);
      })
    )
    .subscribe(
      (response: AuthResponse | null) => {
        if (!response) {
          return;
        }
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('user', response.user.email);
        this.router.navigate(['chat']);
      }
    )
  }

}

