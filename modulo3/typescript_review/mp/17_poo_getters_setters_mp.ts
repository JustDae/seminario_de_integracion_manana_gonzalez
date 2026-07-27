class RutaBus {
  private _distanciaKm: number;
  constructor(distancia: number) {
    this._distanciaKm = distancia;
  }
  get distancia(): number {
    return this._distanciaKm;
  }
  set distancia(valor: number) {
    if (valor <= 0) throw new Error("La distancia debe ser positiva");
    this._distanciaKm = valor;
  }
  get tiempoEstimadoMinutos(): number {
    return this._distanciaKm / 0.5;
  }
}
const rutaA = new RutaBus(15);
console.log(rutaA.distancia);          
console.log(rutaA.tiempoEstimadoMinutos.toFixed(0)); 
rutaA.distancia = 20;                  
console.log(rutaA.tiempoEstimadoMinutos.toFixed(0)); 
