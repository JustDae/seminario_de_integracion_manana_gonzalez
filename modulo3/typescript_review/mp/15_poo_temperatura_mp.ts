class Velocidad {
  valorKmh: number = 0;
  valorMph: number = 0;
  constructor(kmh: number = 0, mph: number = 0) {
    this.valorKmh = kmh;
    this.valorMph = mph;
  }
  aMph(): number {
    return this.valorKmh * 0.621371;
  }
  aMs(): number {
    return this.valorKmh / 3.6;
  }
  aKmh(): number {
    this.valorKmh = this.valorMph / 0.621371;
    return this.valorKmh;
  }
  reportarVelocidad(): string {
    return (
      `${this.valorKmh.toFixed(2)} km/h = ` +
      `${this.aMph().toFixed(2)} mph = ` +
      `${this.aMs().toFixed(2)} m/s`
    );
  }
}
const limiteUrbano = new Velocidad(50);
const busDetenido = new Velocidad(0);
const limiteCarretera = new Velocidad(0, 60); 
console.log(limiteUrbano.reportarVelocidad());     
console.log(busDetenido.reportarVelocidad()); 
console.log(limiteCarretera.aKmh().toFixed(2));
