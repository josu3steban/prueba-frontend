import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../services/producto.service'
import { ProductoResponse, Producto } from '../../interfaces/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {


  productos: Producto[] = [];
  productoId: string = '';
  hayError = false;

  constructor( private productoService: ProductoService ) {
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  //obtener todos los productos
  obtenerProductos() {

    this.hayError = false;

    this.productoService.obtenerProductos().subscribe({
      next: (resp) => {
        this.productos = resp.prodcutos;
        console.log(resp.prodcutos);
      },

      error: (error) => {
        this.hayError = true;
      }
    });

  }


  // eliminar producto 
  eliminarProducto( id: string ) {

    this.hayError = false;

    this.productoService.eliminarProducto(id).subscribe({
      next: (resp) => {
        this.hayError = false;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto eliminado',
          showConfirmButton: false,
          timer: 1500
        }).then( () => {
          window.location.href = `/producto`;
        })
      },

      error: (error) => {
        this.hayError = true;
      }
    });

  }

  productoPorId() {
    console.log('HOLA')
    this.productoService.obtenerProductoPorId( this.productoId );
  }

}
