const rutaId: number = 101;
const estacionDestino: string = "Estación Central";
const enRecorrido: boolean = true;
const rutaId2 = 101;       
const estacionDestino2 = "Estación Central";  
const enRecorrido2 = true;       
let retrasoMinutos: number;      
retrasoMinutos = 15;
let codigoBus: number | string = 500;  
codigoBus = "BUS-500";  
function reportarLlegada(estacion: string, buses: number): string {
  return `Reporte en ${estacion} — ${buses} bus(es) en espera`;
}
