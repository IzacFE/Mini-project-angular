import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

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
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Berhasil Buat Akun');
          this.signupForm.reset();
          this.router.navigate(['/auth/login']);
        },
        (err) => {
          alert('Gagal Membuat Akun');
        }
      );
  }
}
