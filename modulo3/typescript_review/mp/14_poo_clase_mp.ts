class UnidadTransporte {
  placa: string;
  capacidad: number;
  operativa: boolean;
  constructor(placa: string, capacidad: number, operativa: boolean) {
    this.placa = placa;
    this.capacidad = capacidad;
    this.operativa = operativa;
  }
  informarEstado(): string {
    const estado = this.operativa ? "en servicio" : "fuera de servicio";
    return `Unidad ${this.placa} — Capacidad: ${this.capacidad} pax (${estado})`;
  }
}
const busNormal = new UnidadTransporte("PAB-123", 40, true);
const busArticulado = new UnidadTransporte("PAB-456", 120, false);
console.log(busNormal.informarEstado()); 
console.log(busArticulado.informarEstado()); 
