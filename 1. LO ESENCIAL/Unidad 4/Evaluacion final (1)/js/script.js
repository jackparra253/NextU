var estudiantes = [{
  codigo: "0001",
  nombre: "Carlos Augusto",
  nota: 5
}, {
  codigo: "0002",
  nombre: "Augusto",
  nota: 4.8
}, {
  codigo: "0003",
  nombre: "Jack",
  nota: 4.9
}, {
  codigo: "0004",
  nombre: "Edicxon",
  nota: 4.7
}, {
  codigo: "0005",
  nombre: "Carlos Yohan",
  nota: 4.6
}, {
  codigo: "0006",
  nombre: "Isabel",
  nota: 4.5,
}, {
  codigo: "0007",
  nombre: "Jorge",
  nota: 4.4
}, {
  codigo: "0008",
  nombre: "Rafael",
  nota: 4
}, {
  codigo: "0009",
  nombre: "William",
  nota: 4.2
}, {
  codigo: "0010",
  nombre: "Cristian",
  nota: 4.3
}];

function leerListaEstudiantes(json) {
  var codigo = "";
  var nombre = "";
  var nota = 0;
  for (var i = 0; i < json.length; i++) {
    codigo += json[i].codigo + "<br>";
    nombre += json[i].nombre + "<br>";
    nota += json[i].nota + "<br>";
  }
  document.getElementById("codigo").innerHTML = codigo;
  document.getElementById("nombre").innerHTML = nombre;
  document.getElementById("nota").innerHTML = nota;
}

function notaPromedio(json) {
  var cantidad = json.length;
  var suma = 0;
  var total = 0;

  for (var i = 0; i < json.length; i++) {
    suma += json[i].nota;
  }
  total = suma / cantidad;
  document.getElementById("promedio").innerHTML = total;
}

function mayorNota(json) {
  debugger;
  var notaMayor = json[0].nota;
  var pos = 0;
  for (var i = 0; i < json.length; i++) {
    if (json[i].nota > notaMayor) {
      notaMayor = json[i].nota;
      pos = i;
    }
  }
  var nombre = json[pos].nombre;
  document.getElementById("nombreMayorNota").innerHTML = nombre;
}

function menorNota(json) {
  var notaMenor = json[0].nota;
  var pos = 0;
  for (var i = 0; i < json.length; i++) {
    if (json[i].nota < notaMenor) {
      notaMenor = json[i].nota;
      pos = i;
    }
    var nombre = json[pos].nombre;
    document.getElementById("nombreMenorNota").innerHTML = nombre;
  }
}

function eventoOnload() {
  document.getElementById("mostrarTabla").style.visibility = "hidden";
  document.getElementById("mostrarDiv1").style.visibility = "hidden";
  document.getElementById("mostrarDiv2").style.visibility = "hidden";
  document.getElementById("mostrarDiv3").style.visibility = "hidden";
}

function mostrarListaEstudiantes() {
  leerListaEstudiantes(estudiantes);
  document.getElementById("mostrarTabla").style.visibility = "visible";
}

function mostrarnotaPromedio() {
  notaPromedio(estudiantes);
  document.getElementById("mostrarDiv1").style.visibility = "visible";
}

function mostarNombreMayorNota() {
  mayorNota(estudiantes);
  document.getElementById("mostrarDiv2").style.visibility = "visible";
}

function mostrarNombreMenorNota() {
  menorNota(estudiantes);
  document.getElementById("mostrarDiv3").style.visibility = "visible";
}
