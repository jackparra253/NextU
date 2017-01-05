var miJSON = [
  {
    "codigo":"001",
    "nombre":"calculo"
  },
  {
    "codigo":"fisica",
    "nombre":"programación"
  },
  {
    "codigo":"003",
    "nombre":"algoritmo"
  }
];

function leerJSON(json){
   var out="";
   var i;
   for (i = 0; i < json.length; i++) {
     alert("codigo:"+json[i].codigo + "-" + json[i].nombre);
   }
}
leerJSON(miJSON);
