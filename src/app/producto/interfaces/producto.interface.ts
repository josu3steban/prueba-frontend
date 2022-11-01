export interface ProductoResponse{
   ok:        boolean;
   prodcutos: Producto[];
}

export interface Producto {
   creado?:      Date;
   stock:       number;
   precio:      number;
   estado?:      boolean;
   _id?:         string;
   nombre:      string;
   descripcion: string;
}
