import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/add', component: ProductosFormComponent},
  { path: 'productos/edit/:id', component: ProductosFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
