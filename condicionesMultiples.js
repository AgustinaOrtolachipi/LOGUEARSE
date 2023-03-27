var tengoMuchaPlata = true;
var esFinDeSemana = false;
var meSobranUnosPesos = true;
var estaLloviendo = false;
// condiciones para salir de joda
// 1 - es fin de semana y me tienen que sobrar unos pesos y no tiene que estar lloviendo.
// 2 - salvo ue me sobre mucha plata y no este lloviendo
if (esFinDeSemana && meSobranUnosPesos && !estaLloviendo || tengoMuchaPlata && !estaLloviendo) {
    console.log("hoy salgo de joda");
}
