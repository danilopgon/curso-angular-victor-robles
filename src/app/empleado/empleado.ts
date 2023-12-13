export class Empleado {
  constructor(
    public nombre: string,
    public edad: number,
    public cargo: string,
    public contratado: boolean
  ) {}

  // Manera habitual en OOP
  //   public nombre: string;
  //   public edad: number;

  //   constructor(nombre: string, edad: number) {
  //     this.nombre = nombre;
  //     this.edad = edad;
  //   }
}
