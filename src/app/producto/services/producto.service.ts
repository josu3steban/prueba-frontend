import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


import { Producto, ProductoResponse } from '../interfaces/producto.interface';
import { ProductoCrearResponse } from '../interfaces/producto-crear.interface';
import { ProductoEliminarResponse } from '../interfaces/producto-eliminar.interface';
import { ProductoIdResponse } from '../interfaces/producto-id.interface';
import { ProductoActualizarrResponse } from '../interfaces/producto-actualizar.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'https://prueba-backend-expresito.up.railway.app/api';
  // private baseUrl = 'http://localhost:8080/api';

  productoSeleccionado!: Producto;
  

  constructor( private http: HttpClient ) { }


  // obtener todos los producto
  obtenerProductos(): Observable<ProductoResponse> {

    const url = `${this.baseUrl}/producto`;
    return this.http.get<ProductoResponse>(url);
    
  }


  // crear un producto
  crearProducto( producto: Producto):Observable<ProductoCrearResponse> {

    const url = `${this.baseUrl}/producto`;
    return this.http.post<ProductoCrearResponse>(url, producto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  }

  // eliminar un producto
  eliminarProducto( id: string ):Observable<ProductoEliminarResponse> {

    const url = `${this.baseUrl}/producto/${id}`;
    return this.http.delete<ProductoEliminarResponse>(url);
    
  }

  // obtener producto por id
  obtenerProductoPorId( id: string ): Observable<ProductoIdResponse>  {

    const url = `${this.baseUrl}/producto/${id}`;
    return this.http.get<ProductoIdResponse>(url);

  }

  // actualizar producto
  actualizarProducto( producto: Producto, id: string):Observable<ProductoActualizarrResponse> {

    const url = `${this.baseUrl}/producto/${id}`;
    return this.http.put<ProductoActualizarrResponse>(url, producto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  }
}
