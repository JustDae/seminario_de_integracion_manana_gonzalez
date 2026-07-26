type EstadoBus = "en_terminal" | "en_ruta" | "en_mantenimiento" | "fuera_de_servicio";
type PrioridadIncidente = "baja" | "media" | "alta";
function registrarEstadoBus(idBus: number, estado: EstadoBus): void {
  console.log(`Unidad #${idBus}: ${estado}`);
}
registrarEstadoBus(101, "en_ruta"); 
type NivelIncidente = "baja" | "media" | "alta" | "critica";
interface Incidente {
  id: number;
  descripcion: string;
  prioridad: NivelIncidente;
  atendido: boolean;
}
function clasificarIncidente(i: Incidente): string {
  const prefijos: Record<NivelIncidente, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };
  const estado = i.atendido ? "✅" : "⏳";
  return `${estado} ${prefijos[i.prioridad]} [#${i.id}] ${i.descripcion}`;
}
const incidentes: Incidente[] = [
  { id: 1, descripcion: "Llantas desgastadas",  prioridad: "baja",    atendido: true  },
  { id: 2, descripcion: "Falla de frenos",         prioridad: "critica", atendido: false },
  { id: 3, descripcion: "Demora por tráfico",  prioridad: "media",   atendido: false },
];
for (const i of incidentes) {
  console.log(clasificarIncidente(i));
}
