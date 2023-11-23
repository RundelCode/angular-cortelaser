import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  
  filas: any[] = [];

  ngOnInit(): void {
    this.añadir();
  }
  cant = 10

  añadir() {
    for (let i = 1; i <= this.cant; i++) {
      this.filas.push({
        nombre: `Nuevo Nombre ${i}`,
        id: `Nuevo ID ${i}`,
        precio: `Nuevo Precio ${i}`,
        Tamano: `Nuevo Tamano ${i}`
      });
    }
  }
}
