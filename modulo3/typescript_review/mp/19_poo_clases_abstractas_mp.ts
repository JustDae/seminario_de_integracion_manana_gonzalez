abstract class Mantenimiento {
  abstract calcularCosto(): number;       
  abstract duracionHoras(): number;
  generarOrden(): string {
    return (
      `Costo Estimado: $${this.calcularCosto().toFixed(2)} | ` +
      `Tiempo: ${this.duracionHoras().toFixed(1)} hrs`
    );
  }
}
class CambioAceite extends Mantenimiento {
  constructor(private litros: number) {
    super();
  }
  override calcularCosto(): number {
    return 15 + (this.litros * 5); 
  }
  override duracionHoras(): number {
    return 1.5;
  }
}
class RevisionFrenos extends Mantenimiento {
  constructor(private ejes: number) {
    super();
  }
  override calcularCosto(): number {
    return this.ejes * 40; 
  }
  override duracionHoras(): number {
    return this.ejes * 2; 
  }
}
const aceite = new CambioAceite(10);
const frenos = new RevisionFrenos(2);
console.log(aceite.generarOrden()); 
console.log(frenos.generarOrden());    
