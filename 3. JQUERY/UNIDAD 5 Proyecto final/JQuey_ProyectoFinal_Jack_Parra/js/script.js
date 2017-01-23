$(document).ready(function(){
	
	var codigo = '';
	var nombre = '';
	var nota = '';
	var estudiante = new Object();

	$("#botonRegistrar").click(function(){
		
		codigo = $("#codigo").val();
		nombre = $("#nombre").val();
		nota = $("#nota").val();

		if (isNaN(nota)) {
			alert("Ingrese solo números");
			nota = $("#nota").val("");
			return;
		}

		estudiante = {
			codigo:codigo,
			nombre:nombre,
			nota:nota
		};

		localStorage.setItem(codigo,JSON.stringify(estudiante));
		listarEstudiantes();
		restablecer();
	});

	$("#botonPromedio").click(function(){
		notaPromedio();
	});

	$("#botonMayor").click(function(){
		mayorNota();
	});

	$("#botonMenor").click(function(){
		menorNota();
	});

	listarEstudiantes();
	notaPromedio();
	mayorNota();
	menorNota()
});

function editarEstudiante(id){
	var i = 0;
	var estudiante = new Object();
	var clave = '';

	for(i = 0; i < localStorage.length; i++){
		clave = localStorage.key(i);
		
		if (clave == id) {
			estudiante = $.parseJSON(localStorage.getItem(clave));
			
			codigo = $("#codigo").val(estudiante.codigo);
			nombre = $("#nombre").val(estudiante.nombre);
			nota = $("#nota").val(estudiante.nota);
		}
	}
}

function eliminarEstudiante(id){
	localStorage.removeItem(id);
	listarEstudiantes();
}

function listarEstudiantes(){
	var tabla = '';
	var contenedor = $("#divContenedor");
	var i = 0;
	var clave = '';
	var estudiante = new Object();

	tabla += '<table class="table table-striped table-hover table-condensed table-bordered">';
	tabla += '<thead>';
	tabla += '<tr>';
	tabla += '<th>Código</th>';
	tabla += '<th>Nombre</th>';
	tabla += '<th>nota</th>';
	tabla += '<th>Editar</th>';
	tabla += '<th>Eliminar</th>'
	tabla += '</tr>';
	tabla += '</thead>';
	tabla += '<tbody>';

	for(i=0;i<localStorage.length; i++){
		clave = localStorage.key(i);
		estudiante = $.parseJSON(localStorage.getItem(clave));

		tabla += '<tr>';
		tabla += '<td>' + estudiante.codigo + '</td>';
		tabla += '<td>' + estudiante.nombre + '</td>';
		tabla += '<td>' + estudiante.nota + '</td>';
		tabla += '<td><button class="btn btn-success" onclick="editarEstudiante('+ estudiante.codigo +')">Editar</button></td>' ;
		tabla += '<td><button class="btn btn-danger" onclick="eliminarEstudiante('+ estudiante.codigo +')">Eliminar</button></td>' ;
		tabla += '</tr>';
	}
	tabla += '</tbody>';
	tabla += '</table>';
	$(contenedor).html(tabla);
}

function notaPromedio() {
	var estudiante = new Object();
  	var cantidad = localStorage.length;
  	var suma = 0;
  	var total = 0;
  	var contenedor = $("#promedio");
	var i = 0;

	for (i = 0; i < localStorage.length; i++) {
		clave = localStorage.key(i);
		estudiante = $.parseJSON(localStorage.getItem(clave));
		suma += parseInt(estudiante.nota);
	}
	total = 'Promedio:' +  suma / cantidad;
	$(contenedor).html(total);
}

function mayorNota() {
  	var contenedor = $("#mayorNota");
	var estudiante = new Object();
	var pos = localStorage.key(0);
  	var i = 0;
  	var clave = '';

	estudiante = $.parseJSON(localStorage.getItem(pos));
  	var notaMayor = parseInt(estudiante.nota);
  	
	for (i = 0; i < localStorage.length; i++) {
		clave = localStorage.key(i);
		estudiante = $.parseJSON(localStorage.getItem(clave));
		if (parseInt(estudiante.nota) > notaMayor) {
		  notaMayor = estudiante.nota;
		  pos = clave;
		}

	}
	estudiante = $.parseJSON(localStorage.getItem(pos));
  	var nota = 'Nota mayor:' + estudiante.nota;  	
  	$(contenedor).html(nota);
}

function menorNota() {
	var contenedor = $("#menorNota");
	var estudiante = new Object();
	var pos = localStorage.key(0);
	var i = 0;
  	var clave = '';

  	estudiante = $.parseJSON(localStorage.getItem(pos));
  	var notaMenor = parseInt(estudiante.nota);
	

	for (i = 0; i < localStorage.length; i++) {
		clave = localStorage.key(i);
		estudiante = $.parseJSON(localStorage.getItem(clave));
		if (estudiante.nota < notaMenor) {
		  notaMenor = estudiante.nota;
		  pos = clave;
		}
	}

	estudiante = $.parseJSON(localStorage.getItem(pos));
  	var nota = 'Nota menor:' + estudiante.nota;  	
	$(contenedor).html(nota);
}