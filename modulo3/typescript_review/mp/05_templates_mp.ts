const chofer: string = "Carlos";
const linea: string    = "Línea Express";
const viajesRealizados: number = 12;
const bienvenida: string = `Turno iniciado por ${chofer}. Ruta: ${linea}. Viajes hoy: ${viajesRealizados}.`;
console.log(bienvenida);
const tarifaNormal: number = 0.50;
const subsidio: number    = 0.20;
const tarifaUsuario: string  = `Tarifa a pagar: $${(tarifaNormal - subsidio).toFixed(2)}`;
console.log(tarifaUsuario);
let terminal: string = "Estación Norte";
let terminalAbierta: boolean = true;
let ocupacionBus: number = 85.5;
const reporteBus: string = `
=== Reporte de Unidad ===
Ubicación : Estación Central
Estado    : operativo
Ocupación : 90%
`;
const reporteBus2: string = `
=== Reporte de Unidad ===
Ubicación : ${terminal}
Estado    : ${terminalAbierta ? 'operativo' : 'fuera de servicio'}
Ocupación : ${ocupacionBus}%
`;
console.log(reporteBus);
console.log(reporteBus2);
