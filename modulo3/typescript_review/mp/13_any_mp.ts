let datosGPSCualquiera: any = "sin señal";
datosGPSCualquiera = -0.180653;       
datosGPSCualquiera = true;     
try {
  datosGPSCualquiera.apagarGPS(); 
} catch(e: any) {
  console.log("Falla en runtime (esperada por usar any):", e.message);
}
let sensorData: unknown = "activo";
sensorData = 120;                 
if (typeof sensorData === "string") {
  console.log(sensorData.toUpperCase()); 
}
function alertaCritica(msg: string): never {
  throw new Error(`CRÍTICO: ${msg}`); 
}
function manejarEstadoImposible(estado: never): never {
  throw new Error(`Estado de bus no manejado: ${String(estado)}`);
}
