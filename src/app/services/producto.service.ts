import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Restangular } from 'ngx-restangular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {
    API_URI = environment.webApiUrl;
    constructor(private http: HttpClient) {
    }

    getProductos() {
        return this.http.get(`${this.API_URI}productos`);
    }

    getById(id: string) {
        return this.http.get(`${this.API_URI}productos/${id}`);
    }

    deleteProducto(id: string) {
        return this.http.delete(`${this.API_URI}productos/${id}`);
    }

    saveProducto(producto: Producto){
        return this.http.post(`${this.API_URI}productos`, producto);
    }

    updateProducto(id: string|number, producto: Producto){
        return this.http.put(`${this.API_URI}productos/${id}`, producto);
    }
}
