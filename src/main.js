import Client1 from './cliente.js';
import Impuestos from './impuesto.js';

let resultado = document.getElementById('resultado')
let calculacion = document.getElementById('calcular')
calculacion.addEventListener('click',Calculos_Impuesto)

function Calculos_Impuesto(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value
    let monto = document.getElementById('MontoBruto').value
    let deduccion = document.getElementById('Deducciones').value

    if (nombre && parseInt(monto) && parseInt(deduccion)) {
        let impues1 = new Impuestos(parseInt(monto), parseInt(deduccion))
        let clien1 = new Client1(nombre, impues1)
        resultado.innerHTML = `${clien1.nombre} debe pagar ${clien1.calcularImpuesto2()}`
    }
    else {
        alert("Ingrese valores")
    }
}