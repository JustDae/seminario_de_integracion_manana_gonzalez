enum SentidoRuta {
  Norte,  
  Sur,    
  Este,   
  Oeste,  
}
const sentidoActual: SentidoRuta = SentidoRuta.Norte;
console.log(sentidoActual);           
console.log(SentidoRuta[0]);    
enum CodigoMantenimiento {
  OK = 200,
  FallaLeve = 404,
  FallaCritica = 500,
}
enum RolOperativo {
  Despachador = "DESPACHADOR",
  Conductor   = "CONDUCTOR",
  Mecanico    = "MECANICO",
}
const miRolO: RolOperativo = RolOperativo.Conductor;
console.log(miRolO); 
