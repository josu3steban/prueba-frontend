export interface ProductoActualizarrResponse {
   ok:       boolean;
   msg:      string;
   producto: Producto;
}

export interface Producto {
   creado:      Date;
   stock:       number;
   precio:      number;
   estado:      boolean;
   _id:         string;
   nombre:      string;
   descripcion: string;
   createdAt:   Date;
   updatedAt:   Date;
   __v:         number;
}
