import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-crear-actualizar-producto',
  templateUrl: './crear-actualizar-producto.component.html',
  styles: [
  ]
})
export class CrearActualizarProductoComponent implements OnInit {

  nombre      : string = '';
  descripcion : string = '';
  stock       : number = 0;
  precio      : number = 0.00;

  productoId!: string;
  producto!: Producto;

  hayError: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private productoService: ProductoService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => this.productoId = id );

    if( this.productoId ) {
      this.productoService.obtenerProductoPorId( this.productoId ).subscribe({
        next: (resp) => {
          this.nombre       = resp.producto.nombre;
          this.descripcion  = resp.producto.descripcion;
          this.stock        = resp.producto.stock;
          this.precio       = resp.producto.precio;
        }
      });
    }
    
  }

  crearProducto() {

    this.hayError = false;

    const data: Producto = {
      nombre      : this.nombre,
      descripcion : this.descripcion,
      stock       : this.stock,
      precio      : this.precio
    };

    if(
      this.nombre       === '' ||
      this.descripcion  === '' ||
      this.stock        === 0  ||
      this.precio       === 0
    ) {
      this.hayError = true;
      return;
    }


    console.log(data)

    if( !this.productoId ) {

      this.productoService.crearProducto(data).subscribe({
        next: (resp) => {
          this.hayError = false;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto creado',
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            window.location.href = `/producto`;
          })
        }
      });

    }else {

      this.productoService.actualizarProducto(data, this.productoId).subscribe({
        next: (resp) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto actualizado',
            showConfirmButton: false,
            timer: 1500
          }).then( () => {
            window.location.href = `/producto`;
          })
        }
      });
      
    }

    
    
  }

}
