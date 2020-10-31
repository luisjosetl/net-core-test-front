import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.log(err)
    );
  }

  deleteProducto(id: string) {
    this.productoService.deleteProducto(id)
      .subscribe(
        res => {
          console.log(res);
          this.loadProductos();
        },
        err => console.log(err)
      );
  }


}
