export interface ProductoIdResponse {
   ok:       boolean;
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
