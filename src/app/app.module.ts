import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RestangularConfigFactory } from 'src/app/restangularConfig';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './services/producto.service';
import { ProductosFormComponent } from './productos-form/productos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot([], RestangularConfigFactory)
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
