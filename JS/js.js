window.onload = cargarEventos;
var tabla = [
  { "codigo": null ,
    "nombre": null ,
    "nota"  : null },
];

function cargarEventos(){
  document.getElementById("botonRegistrar").addEventListener( "click", nuevoEstudiante, false);
  document.getElementById("botonLista").addEventListener( "click", mostrarTabla, false);
  document.getElementById("botonPromedio").addEventListener("click",  mostrarPromedio, false);
  document.getElementById("botonNotaMayor").addEventListener("click",  mostrarMejorEstudiante, false);
  document.getElementById("botonNotaMenor").addEventListener("click", mostrarPeorEstudiante, false);
}

function mostrarTabla(){
  var cuerpoTabla = document.getElementById("datos-tabla");
  var tablaLlena = "";
  for (var i = 1; i < tabla.length; i++) {
    tablaLlena += "<tr><td>" + tabla[i].codigo + "</td><td>" + tabla[i].nombre + "</td><td>" + tabla[i].nota + "</td></tr>" ;
  }
  cuerpoTabla.innerHTML = tablaLlena;
}

function nuevoEstudiante(){
  var introCodigo = document.getElementById("txtCod").value;
  var introNombre = document.getElementById("txtNom").value;
  var introNota   = parseFloat(document.getElementById("txtNot").value);
  var nuevoEstudiante = { "codigo": introCodigo, "nombre": introNombre, "nota": introNota };
  tabla.push(nuevoEstudiante);
}

function promedio(json)
{
    var suma = 0;
    var cont = 0;
    for (var i = 1; i < tabla.length; i++)
    {
      suma = suma + tabla[i].nota;
      cont++;
    }
    var cuerpoPromedio = document.getElementById("promedio");
    cuerpoPromedio.innerHTML = "El promedio de las notas de todos los estudiantes es: " + parseFloat(suma / cont).toFixed(2);
}

function mostrarPromedio()
{
promedio(tabla);
}

function notaMayor(json)
{
  var out = "-------------------------Mejor Nota----------------------<br>";
  var num = 0;
  var pos = 0;
  for (var i = 1; i < tabla.length; i++)
  {
    if (tabla[i].nota > num)
    {
      num = tabla[i].nota;
      pos = i;
    }
  }
  out += "Codigo: " + tabla[pos].codigo + " - " + "Nombre:  " + tabla[pos].nombre +  " - "
  + "Nota: " + " - " + tabla[pos].nota + "<br>";
  document.getElementById("mejor").innerHTML = out;
}
function mostrarMejorEstudiante()
{
notaMayor(tabla);
}

function notaMenor(json)
{
  var out = "----------------------------Peor Nota------------------------<br>";
  var num = 5;
  var pos = 1;
  for (var i = 1; i < tabla.length; i++)
  {
    if (tabla[i].nota < num)
    {
      num = tabla[i].nota;
      pos = i;
    }
  }
  out += "Codigo: " + tabla[pos].codigo + " - " + "Nombre:  " + tabla[pos].nombre +  " - "
  + "Nota: " + " - " + tabla[pos].nota + "<br>";
  document.getElementById("peor").innerHTML = out;
}

function mostrarPeorEstudiante()
{
notaMenor(tabla);
}
