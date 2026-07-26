type Vehiculo = {
  idRuta: number;
  placa: string;
  capacidad: number;
  operativo: boolean;
  pasajerosActuales: number;
};
const flota: Vehiculo[] = [
  { idRuta: 1, placa: "PAB-1234", capacidad: 40, operativo: true, pasajerosActuales: 25 },
  { idRuta: 2, placa: "PAB-5678", capacidad: 80, operativo: true, pasajerosActuales: 60 },
  { idRuta: 3, placa: "PAB-9012", capacidad: 40, operativo: false, pasajerosActuales: 0 },
  { idRuta: 4, placa: "PAB-3456", capacidad: 20, operativo: true, pasajerosActuales: 15 },
  { idRuta: 5, placa: "PAB-7890", capacidad: 120, operativo: true, pasajerosActuales: 100 },
];
const enServicio: Vehiculo[] = flota.filter((v) => v.operativo);
const placas: string[] = flota.map((v) => v.placa);
const menosOcupado: Vehiculo | undefined = flota.reduce((min, v) =>
  v.pasajerosActuales < min.pasajerosActuales ? v : min
);
const flotaCompleta: Vehiculo[] = flota.map((v) => v);
console.log(flotaCompleta);
const pasajerosVehiculo4: number = flota[3].pasajerosActuales;
console.log(`Pasajeros actuales del vehículo 4: ${pasajerosVehiculo4}`);
