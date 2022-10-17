import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerbaService } from 'src/app/services/serba.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public loading: boolean = false;
  public products: any[] = [];
  public errorMessage: string | null = null;

  constructor(private serbaService: SerbaService, private router: Router) {}

  ngOnInit(): void {
    const status = localStorage.getItem('user');
    if (status != 'login') {
      this.router.navigate(['/auth/login']);
    }
    this.getAllProductsFromServer();
  }

  public getAllProductsFromServer() {
    this.loading = true;
    this.serbaService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.loading = false;
        console.log(data);
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}
