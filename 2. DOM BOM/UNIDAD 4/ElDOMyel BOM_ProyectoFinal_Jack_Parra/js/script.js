var arrayPersona = [];

function Persona(codigo, nombre, nota) {
  this.codigo = codigo;
  this.nombre = nombre;
  this.nota = nota;
}

function enviar() {
  var codigo = document.getElementById("idCodigo").value;
  var nombre = document.getElementById("idNombre").value;
  var nota = document.getElementById("idNota").value;
  persona = new Persona(codigo, nombre, nota);
  arrayPersona.push(persona);
}

function leerPersona(arrayPersona) {
  var i = 0;
  var tabla = document.getElementById("idTabla");
  var tblBody = document.getElementById("idTdBody");

  for (i = 0; i < arrayPersona.length; i++) {
    var fila = document.createElement("tr");

    for (i = 0; i < arrayPersona.length; i++) {
      var columnaCodigo = document.createElement("td");
      var textoCodigo = document.createTextNode("");
      var columnaNombre = document.createElement("td");
      var textoNombre = document.createTextNode("");
      var columnaNota = document.createElement("td");
      var textoNota = document.createTextNode("");

      for (i = 0; i < arrayPersona.length; i++) {
        textoCodigo = document.createTextNode(arrayPersona[i].codigo);
        textoNombre = document.createTextNode(arrayPersona[i].nombre);
        textoNota = document.createTextNode(arrayPersona[i].nota);
      }

      columnaCodigo.appendChild(textoCodigo);
      columnaNombre.appendChild(textoNombre);
      columnaNota.appendChild(textoNota);
      fila.appendChild(columnaCodigo);
      fila.appendChild(columnaNombre);
      fila.appendChild(columnaNota);
    }

    tblBody.appendChild(fila);
  }

  tabla.appendChild(tblBody);
}

function promedioNota(arrayPersona) {
  var promedio = 0;
  var suma = 0;
  var cantidad = arrayPersona.length;
  var i = 0;

  for (i = 0; i < arrayPersona.length; i++) {
    suma = suma + parseInt(arrayPersona[i].nota);
  }

  promedio = suma / cantidad;
  var pintarPromedio = document.getElementById("idNotaPromedio").innerHTML = promedio;
}

function notaMayor(arrayPersona) {
  var notaMayor = arrayPersona[0].nota;
  var nombre = '';
  var pintarNotaNombre = '';
  var pos = 0;
  var i = 0;
  for (i = 0; i < arrayPersona.length; i++) {
    if (arrayPersona[i].nota > notaMayor) {
      notaMayor = arrayPersona[i].nota;
      pos = i;
    }
  }
  nombre = arrayPersona[pos].nombre;
  pintarNotaNombre = document.getElementById("idNotaMayorMostrar").innerHTML = "Nombre: " + nombre + " nota: " + notaMayor;
}

function notaMenor(arrayPersona) {
  var notaMenor = arrayPersona[0].nota;
  var nombre = '';
  var pintarNotaNombre = '';
  var pos = 0;
  var i = 0;
  for (i = 0; i < arrayPersona.length; i++) {
    if (arrayPersona[i].nota < notaMenor) {
      notaMenor = arrayPersona[i].nota;
      pos = i;
    }
  }
  nombre = arrayPersona[pos].nombre;
  pintarNotaNombre = document.getElementById("idNotaMenorMostrar").innerHTML = "Nombre: " + nombre + " nota: " + notaMenor;
}

function mostrarPersona() {
  enviar();
  leerPersona(arrayPersona);
}

function mostrarNotaPromedio() {
  enviar();
  promedioNota(arrayPersona);
  document.getElementById("idLabelPromedio").style.visibility = "visible";
}

function mostrarNotaMayor() {
  enviar();
  notaMayor(arrayPersona);
  document.getElementById("idLabelNotaMayor").style.visibility = "visible";
}

function mostrarNotaMenor() {
  enviar();
  notaMenor(arrayPersona);
  document.getElementById("idLabelNotaMenor").style.visibility = "visible";
}

function cargar() {
  var labelPromedio = document.getElementById("idLabelPromedio").style.visibility = "hidden";
  var labelNotaMayor = document.getElementById("idLabelNotaMayor").style.visibility = "hidden";
  var labelNotaMenor = document.getElementById("idLabelNotaMenor").style.visibility = "hidden";
  var enviar = document.getElementById("idEnviar").addEventListener("click", mostrarPersona);
  var promedio = document.getElementById("idPromedio").addEventListener("click", mostrarNotaPromedio);
  var notaMenor = document.getElementById("idNotaMayor").addEventListener("click", mostrarNotaMayor);
  var notaMayor = document.getElementById("idNotaMenor").addEventListener("click", mostrarNotaMenor);
}
