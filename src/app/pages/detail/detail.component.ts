import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerbaService } from 'src/app/services/serba.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public loading: boolean = true;
  public productId: any | null = null;
  public product: any = {} as any;
  public errorMessage: string | null = null;
  public price: number = 0;
  public total: number = 0;
  public waMe: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private serbaService: SerbaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const status = localStorage.getItem('user');
    if (status != 'login') {
      this.router.navigate(['/auth/login']);
    }
    this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('productId');
    });
    if (this.productId) {
      this.loading = true;
      this.serbaService.getProduct(this.productId).subscribe(
        (data) => {
          this.product = data;
          this.loading = false;
          this.price = data.price * 1000;
          console.log(data);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  public isNotEmpty() {
    return Object.keys(this.product).length > 0;
  }

  updateTotal(event: any) {
    this.total = event.target.value;
    console.log(event.target.value);
    console.log(event);
  }
}
