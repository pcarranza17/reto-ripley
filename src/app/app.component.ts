import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reto-ripley';

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {label: 'Listado', icon: 'pi pi-fw pi-home', routerLink: ["home"]},
          {label: 'Reporte', icon: 'pi pi-fw pi-image', routerLink: ["report"]}
      ];
  }
}
