export class Receta {
    id: string;
    titulo: string;
    descripcion: string;
    ingredientes: string[];
    instrucciones: string;
  
    constructor(id: string, titulo: string, descripcion: string, ingredientes: string[], instrucciones: string) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.ingredientes = ingredientes;
      this.instrucciones = instrucciones;
    }
  }
  