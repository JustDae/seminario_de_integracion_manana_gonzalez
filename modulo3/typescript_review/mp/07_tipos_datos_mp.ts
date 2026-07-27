const totalBuses: number = 42;
const precioPasaje: number = 0.35;
const saldoNegativo: number = -5;
const codigoColorBus: number = 0xff;   
const binarioRuta: number = 0b1010;     
const octalRuta: number = 0o17;         
const pasajerosAnuales: number = 1_000_000;   
console.log(codigoColorBus); 
console.log(binarioRuta);     
console.log(pasajerosAnuales);      
console.log(Number.MAX_SAFE_INTEGER); 
console.log(Number.isFinite(1 / 0)); 
console.log(Number.isNaN(0 / 0));    
const nombreRuta: string = "Ruta Troncal";
const terminalDestino: string = 'Terminal Sur';
const avisoRuta: string = `Próxima parada: ${"Centro"}`; 
const pasajero: string = "Elena";
const saldoTarjeta: number = 2.50;
const mensajeSaldo: string = `Hola, ${pasajero}. Tu saldo es $${saldoTarjeta}.`;
const puedeViajar: string = `Puedes ${saldoTarjeta >= 0.35 ? "viajar" : "recargar"} hoy.`;
const avisoParada: string = `
  Parada 1: Universidad
  Parada 2: Hospital
  Parada 3: Centro
`.trim();
console.log("  Ruta 1  ".trim());      
console.log("RUTA TRES".toLowerCase());   
console.log("terminal".toUpperCase());      
console.log("2024-06-15".split("-"));   
console.log("alerta: desvío".includes("alerta")); 
console.log("ruta.json".endsWith(".json"));     
console.log("ruta.json".startsWith(".json"));
const busEnCamino: boolean = true;
const rutaCancelada: boolean = false;
const esGratis = 0.35 <= 0;    
const hayBusesDisponibles = 5 > 0;    
if (!hayBusesDisponibles) {
  console.log("Sin buses disponibles en la terminal");
}
let rutaSinAsignar: undefined = undefined;
let busSinConductor: null = null;
function buscarConductor(idRuta: number): string | null {
  if (idRuta === 1) return "Mario";
  return null; 
}
const conductorAsignado = buscarConductor(5);
const nombreConductor = conductorAsignado ?? "Reemplazo";
console.log(nombreConductor); 
const experienciaConductor = nombreConductor?.length;
console.log(experienciaConductor); 
