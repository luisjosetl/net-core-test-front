import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  producto: any = {
      descripcion: "",
      marca: "",
      modelo: "",
      porcDescuento: 0
  };

  productoObj: any;


  edit: boolean = false;

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productoService.getById(params.id)
        .subscribe(
          res => {
            console.log(res)
            this.producto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewProducto(){
    this.productoService.saveProducto(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.log(err)
      );
  }

  updateProducto(){
    this.productoService.updateProducto(this.producto.id, this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/productos']);
        },
        err => console.log(err)
      );
  }
}
