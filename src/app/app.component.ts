import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serbastore';

  items: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.items = [
      { label: 'Beranda', icon: 'pi pi-fw pi-home' },
      { label: 'Keranjang', icon: 'pi pi-fw pi-shopping-cart' },
      { label: 'Profil', icon: 'pi pi-fw pi-user' },
    ];
  }
}
