class TarjetaTransporte {
  readonly numeroTarjeta: string;           
  public pasajero: string;        
  private saldo: number;         
  protected tipoDescuento: string;      
  constructor(numeroTarjeta: string, pasajero: string, saldoInicial: number) {
    this.numeroTarjeta = numeroTarjeta;
    this.pasajero = pasajero;
    this.saldo = saldoInicial;
    this.tipoDescuento = "Ninguno";
  }
  obtenerSaldo(): number {
    return this.saldo;
  }
  recargar(monto: number): void {
    if (monto <= 0) throw new Error("Monto de recarga inválido");
    this.saldo += monto;
  }
}
const tarjeta = new TarjetaTransporte("TR-001", "Ana García", 10.00);
console.log(tarjeta.pasajero);         
console.log(tarjeta.numeroTarjeta);              
console.log(tarjeta.obtenerSaldo());  
tarjeta.recargar(5);
console.log(tarjeta.obtenerSaldo());  
