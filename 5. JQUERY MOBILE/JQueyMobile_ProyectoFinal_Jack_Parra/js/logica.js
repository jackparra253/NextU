function cambiarPagina(page){
	switch(page){
		case "paginaRegistro":
				$.mobile.changePage("#" + page, {
				transition: "slidedown"
				});				
				break;
		case "listaHoteles":
				$.mobile.changePage("#" + page, {
					transition: "slidedown"
				});
				break;
		case "datosHotelPag":
				$.mobile.changePage("#" + page, {
					transition: "slidedown"
				});
				break;
		case "paginaInicio":
                $.mobile.changePage("#" + page, {
                    transition: "flip"
                });
                break;
	}
}

$(document).ready(function(){

	var hoteles = [];
	var marcadores = [];
	var marcadorRegistro;
	var mapaRegistro;
	var latlngInicial = new google.maps.LatLng(25.760527, -80.192800); 
	var latitudPunto;
	var longitudPunto;

	$("#btnRegistar").click(function(){
		mostrarMapaRegistro();
		cambiarPagina('paginaRegistro');
	});

	$("#registrar").click(function(){


		var nombre = $("#nombre").val();
		var ciudad = $("#ciudad").val();
		var telefono = $("#telefono").val();
		var estrellas = $("#estrellas").val();

		var hotel = {
			nombre:nombre,
			latitud: latitudPunto,
			longitud: longitudPunto,
			ciudad:ciudad,
			telefono:telefono,			
			estrellas:estrellas
		}

		hoteles.push(hotel);

		alert("Hotel registrado");

		limpiarCampos();

        marcadorRegistro.setPosition(latlngInicial);
        mapaRegistro.setCenter(latlngInicial);


	});

	function limpiarCampos(){
		$("#nombre").val("");
		$("#ciudad").val("");
		$("#telefono").val("");
		$("#estrellas").val("");
	}

	function mostrarMapa() {
      
	    var opciones = {            
	        zoom: 3,
	        center: latlngInicial,
	        mapTypeId: google.maps.MapTypeId.ROADMAP        
	    };
	            
	    var mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);    

	      for (var i = 0; i < hoteles.length; i++) {
	        var latlngnN = new google.maps.LatLng(hoteles[i].latitud, hoteles[i].longitud);
	        var marcador = new google.maps.Marker({            
	            position: latlngnN,
	            map: mapa,
	            title: hoteles[i].nombre        
	        }); 
	    }            
	}

	function mostrarMapaRegistro() {        
	    var opciones = {            
	        zoom: 10,
	        center: latlngInicial,
	        mapTypeId: google.maps.MapTypeId.ROADMAP        
	    };
	          
	    mapaRegistro = new google.maps.Map(document.getElementById("divMapaRegistro"), opciones);

	    marcadorRegistro = new google.maps.Marker({            
	        position: latlngInicial,
	        map: mapaRegistro,
	        draggable: true,
	        title: "Mi punto!!"        
	    });

	    google.maps.event.addListener(marcadorRegistro, 'dragend', function(event) {
	        latitudPunto = event.latLng.lat();
	        longitudPunto = event.latLng.lng();
	    });
	}


	$("#btnGenerarLista").click(function(){
		$("#datos").html("");
		generarListaHoteles();
		cambiarPagina('listaHoteles');
	});

	function generarListaHoteles(){
		var cantidad = hoteles.length;
		var nombreHotel = '';

		for (var i = 0; i < cantidad; i++) {
			nombreHotel = hoteles[i].nombre;
			
			var a = $("<a class='ui-btn' id='btnDatosHotel'>"+ nombreHotel + "</a>");
			a.data("hotel", hoteles[i]);		
			$("#datos").append(a);
			a.click(function(){
				var data = $(this).data("hotel");
				cambiarPagina('datosHotelPag');
				latlngInicial = new google.maps.LatLng(data.latitud, data.longitud);
				mostrarMapa();
				$(datosHotel).append("<div><p><strong>Nombre:</strong>" + data.nombre + "</p><p><strong>Ciudad:</strong>" + data.ciudad + "</p><p><strong>Teléfono:</strong>" + data.telefono + "</p><p><strong>Estrellas:</strong>" + data.estrellas + "</p></div>");
			});
			//"<a class='ui-btn' id='btnGenerarLista'>Consultar</a>"
			//$("#datos").append("<a class='ui-btn' id='btnDatosHotel' onclick='cargarDatos(hoteles["+ i +"].nombre)'>"+ nombreHotel + "</a>");
		}
	}

	$("#btnDatosHotel").click(function(){		
		var valor = $("#btnDatosHotel").val();
		cambiarPagina('datosHotelPag');
		cargarDatosHotel(valor);
	});


	function cargarDatosHotel(nombre){	

		var datosHotel  = "";

		for(var i = 0; i < hoteles.length; i++){
			if (nombre == hoteles[i].nombre) {
				datosHotel += "Nombre: "  + hoteles[i].nombre + "<br>";
				datosHotel += "Ciudad: "  + hoteles[i].ciudad + "<br>";
				datosHotel += "Teléfono: "  + hoteles[i].telefono + "<br>";
				datosHotel += "Estrellas: "  + hoteles[i].estrellas + "<br>";
				datosHotel += "Ubicación: <br>";

				$("#datosHotel").html(datosHotel);
				break;
			}
		}
		mostrarMapa();
	}

});