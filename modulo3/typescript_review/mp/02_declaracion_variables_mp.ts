const MAX_PASAJEROS: number = 40;
const NOMBRE_APP: string = "TransporteApp";
const DEBUG_MODE: boolean = false;
let unidadesActivas: number = 0;
let estadoRuta: string = "suspendida";
let servicioOperativo: boolean = false;
console.log(`
    unidades activas: ${unidadesActivas} 
    estado de la ruta: ${estadoRuta} 
    servicio operativo: ${servicioOperativo}`);
unidadesActivas++;                         
estadoRuta = "en servicio";       
servicioOperativo = true;  
console.log(`
    unidades activas: ${unidadesActivas} 
    estado de la ruta: ${estadoRuta} 
    servicio operativo: ${servicioOperativo}`);             
