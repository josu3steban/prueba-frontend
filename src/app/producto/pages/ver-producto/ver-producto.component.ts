import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
})
export class VerProductoComponent implements OnInit {

  

  producto!: Producto;;

  constructor( private activatedRoute: ActivatedRoute, private productoService: ProductoService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.productoService.obtenerProductoPorId( id )  )
    )
    .subscribe( pais => this.producto = pais.producto );
      
  }


}
