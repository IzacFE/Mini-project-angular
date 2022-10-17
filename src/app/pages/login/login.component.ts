import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const status = localStorage.getItem('user');
    if (status === 'login') {
      this.router.navigate(['/products']);
    }
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(
      (res) => {
        const user = res.find((account: any) => {
          return (
            account.email === this.loginForm.value.email &&
            account.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Berhasil Masuk, Selamat Datang!!');
          this.loginForm.reset();
          this.router.navigate(['/']);
          localStorage.setItem('user', 'login');
        } else {
          alert('Akun Tidak Ditemukan');
        }
      },
      (err) => {
        alert('Mohon Maaf, ada suatu kesalahan pada sistem');
      }
    );
  }
}
