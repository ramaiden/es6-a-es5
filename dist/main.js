"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resultado = document.getElementById('resultado');
var calculacion = document.getElementById('calcular');
calculacion.addEventListener('click', Calculos_Impuesto);

function Calculos_Impuesto(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var monto = document.getElementById('MontoBruto').value;
  var deduccion = document.getElementById('Deducciones').value;

  if (nombre && parseInt(monto) && parseInt(deduccion)) {
    var impues1 = new _impuesto["default"](parseInt(monto), parseInt(deduccion));
    var clien1 = new _cliente["default"](nombre, impues1);
    resultado.innerHTML = "".concat(clien1.nombre, " debe pagar ").concat(clien1.calcularImpuesto2());
  } else {
    alert("Ingrese valores");
  }
}