import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearActualizarProductoComponent, ProductosComponent, VerProductoComponent } from './pages';
import { BuscarProductoComponent } from './pages/buscar-producto/buscar-producto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ProductosComponent,
    VerProductoComponent,
    CrearActualizarProductoComponent,
    BuscarProductoComponent
  ],
  exports: [
    ProductosComponent,
    VerProductoComponent,
    CrearActualizarProductoComponent,
    BuscarProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductoModule { }
