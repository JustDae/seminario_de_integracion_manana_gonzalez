class VehiculoTransporte {
  tipo(): string { return "Vehículo Genérico"; }
  pasajerosMax(): number { return 0; }
}
class Minibus extends VehiculoTransporte {
  constructor(private asientos: number) { super(); }
  override tipo(): string { return "Minibús"; }
  override pasajerosMax(): number { return this.asientos + 5; } 
}
class BusEstandar extends VehiculoTransporte {
  constructor(private asientos: number) { super(); }
  override tipo(): string { return "Bus Estándar"; }
  override pasajerosMax(): number { return this.asientos + 20; } 
}
class BusArticulado extends VehiculoTransporte {
  constructor(private vagones: number) { super(); }
  override tipo(): string { return "Bus Articulado"; }
  override pasajerosMax(): number { return this.vagones * 80; } 
}
const flotaVehiculos: VehiculoTransporte[] = [
  new Minibus(15),
  new BusEstandar(40),
  new BusArticulado(2),
];
for (const v of flotaVehiculos) {
  console.log(`${v.tipo()}: capacidad máxima = ${v.pasajerosMax()} pasajeros`);
}
