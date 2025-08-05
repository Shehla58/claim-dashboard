
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ Import here

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule],  // ✅ Add this
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  handleLogin(): void {
    const payload = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post<any>('http://localhost:5062/api/Auth/login', payload, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      .subscribe({
        next: (data) => {
          console.log('API Response:', data);

          if (data && data.token) {
            localStorage.setItem('apiKey', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userName', data.userName);

            const authHeaders = {
              authorizationheader: `Bearer ${data.token}`,
              'Content-Type': 'application/json',
            };
            localStorage.setItem('authHeaders', JSON.stringify(authHeaders));

            const branchUsers = [
              'JeddahHarmainUser',
              'MakkahUser',
              'YanbuUser',
              'TaifUser',
              'AbhaUser',
              'NajranUser',
              'TabukUser',
            ];

            if (data.userName === 'AccountantUser') {
              this.router.navigate(['/accountant']);
            } else if (branchUsers.includes(data.userName)) {
              this.router.navigate(['/branch']);
            } else {
              alert('Invalid Username! No route assigned.');
            }
          } else {
            alert(data.message || 'Login Failed');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('An error occurred. Please try again later.');
        },
      });
  }
}
