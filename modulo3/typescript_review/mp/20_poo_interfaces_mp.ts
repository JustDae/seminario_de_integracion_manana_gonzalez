interface Programable {
  generarHorario(): string;
}
interface Operable {
  estaOperativa(): boolean;
}
class RutaAsignada implements Programable, Operable {
  constructor(
    public id: string,
    public estaciones: string[],
    public busesActivos: number
  ) {}
  generarHorario(): string {
    return JSON.stringify({ id: this.id, estaciones: this.estaciones, frecuencia: "15 min" });
  }
  estaOperativa(): boolean {
    return this.estaciones.length >= 2 && this.busesActivos > 0;
  }
}
const rutaProgramada = new RutaAsignada("R-001", ["Norte", "Sur"], 5);
console.log(rutaProgramada.estaOperativa());    
console.log(rutaProgramada.generarHorario());
