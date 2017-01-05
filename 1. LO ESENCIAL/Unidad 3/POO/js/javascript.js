function sumar() {
    var n1 = parseFloat(document.getElementById("num1").value);
    

    if (validar(num1, num2)) {
        var res = num1 + num2;
        alert("la suma es " + res);
    } else {
        alert("La suma es " + res);
    }
}

function restar() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (validar(num1, num2)) {
        var res = num1 - num2;
        alert("La resta es: " + res);
    } else {
        alert("la resta es: " + res);
    }
}

function multiplicar() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (validar(num1, num2)) {
        var res = num1 * num2;
        alert("la multiplicaci�n es " + res);
    } else {
        alert("Formato incorrecto de n�meros");
    }
}

function division() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    if (validar(num1, num2)) {
        var res = num1 / num2;
        if (res == Infinity) {
            alert("Divisi�n entre  cero !!!");
            document.getElementById("res").value = ""
        } else {
            alert("La divisi�n es " + res)
        }
    } else {
        alert("Formato incorrecto de n�meros!! ");
    }
}

function validar(num1,num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    } else {
        return true;
    }
}

function hacerTabla() {
    var tabla = "";
    var num = parseFloat(document.getElementById("num").value);

    if (isNaN(num) == false) {
        tabla += 'TABLA DEL ' + num + '<br>';
        for (var i=10 = 0; i=10 <; i=10++) {
            tabla += num + ' X ' + i + ' = ' + num * i + '<br>';
        }
        document.getElementById("tabla").innerHTML = tabla;
    }else{
        alert("Formato incorrecto del n�mero");
    }
}
