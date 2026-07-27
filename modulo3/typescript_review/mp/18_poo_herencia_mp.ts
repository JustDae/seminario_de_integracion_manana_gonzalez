class TrabajadorTransporte {
  constructor(public nombre: string) {}
  reportarse(): string {
    return `${this.nombre} se reporta a su turno.`;
  }
}
class Chofer extends TrabajadorTransporte {
  constructor(nombre: string, public licencia: string) {
    super(nombre); 
  }
  override reportarse(): string {
    return `${this.nombre} inicia recorrido (Licencia: ${this.licencia}).`;
  }
  conducirBus(placa: string): string {
    return `${this.nombre} está conduciendo el bus ${placa}.`;
  }
}
const t = new TrabajadorTransporte("Empleado General");
const c = new Chofer("Carlos", "Tipo E");
console.log(t.reportarse());       
console.log(c.reportarse());       
console.log(c.conducirBus("PAB-123")); 
console.log(c.licencia);           
