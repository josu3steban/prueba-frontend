import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuscarProductoComponent, CrearActualizarProductoComponent, ProductosComponent, VerProductoComponent } from "./producto/pages";


const rutas: Routes = [

   {
      path: 'productos',
      component: ProductosComponent,
   },

   {
      path: 'producto/ver/:id',
      component: VerProductoComponent,
      
   },

   {
      path: 'producto/editar/:id',
      component: CrearActualizarProductoComponent,
   },

   {
      path: 'producto/crear',
      component: CrearActualizarProductoComponent,
      
   },

   {
      path: 'producto/buscar',
      component: BuscarProductoComponent,
   },

   {
      path: '**',
      redirectTo: 'productos',
   },
   
];

@NgModule({
   imports: [
      RouterModule.forRoot( rutas )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }