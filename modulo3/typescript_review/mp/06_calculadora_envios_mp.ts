type TipoRuta = "urbana" | "intercantonal" | "interprovincial";
interface Pasaje {
  pasajero: string;
  distanciaKm: number;
  equipajeExtra: number;
  ruta: TipoRuta;
}
const TARIFAS_BASE: Record<TipoRuta, number> = {
  urbana:           0.35,   
  intercantonal:    1.50,
  interprovincial:  5.00,
};
const COSTO_KM_EXTRA = 0.05;  
const COSTO_EQUIPAJE = 2.00;
function calcularPasaje(pasaje: Pasaje): string {
  const tarifaBase = TARIFAS_BASE[pasaje.ruta];
  const costoDistancia = pasaje.ruta !== 'urbana' ? pasaje.distanciaKm * COSTO_KM_EXTRA : 0;
  const costoEquipaje = pasaje.equipajeExtra * COSTO_EQUIPAJE;
  const total = tarifaBase + costoDistancia + costoEquipaje;
  return `
🎫 Emisión de Pasaje
   Pasajero    : ${pasaje.pasajero}
   Ruta        : ${pasaje.ruta}
   Tarifa Base : $${tarifaBase.toFixed(2)}
   Costo Dist. : $${costoDistancia.toFixed(2)}
   Equipaje    : $${costoEquipaje.toFixed(2)}
   ─────────────────────────
   TOTAL       : $${total.toFixed(2)}
  `.trim();
}
const viaje1: Pasaje = {
  pasajero: "María López",
  distanciaKm: 15,
  equipajeExtra: 0,
  ruta: "urbana",
};
const viaje2: Pasaje = {
  pasajero: "Carlos Pérez",
  distanciaKm: 120,
  equipajeExtra: 2,
  ruta: "interprovincial",
};
console.log(calcularPasaje(viaje1));
console.log("---");
console.log(calcularPasaje(viaje2));
