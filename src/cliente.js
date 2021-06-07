export default class Client1 {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre
    }

    get impuesto() {
        return this._impuesto
    }

    set impuesto(nuevo_impuesto) {
        this._impuesto = nuevo_impuesto
    }

    calcularImpuesto2() {
        return ((this._impuesto._monto_bruto - this._impuesto._deducciones) * 0.21);
    }
}


