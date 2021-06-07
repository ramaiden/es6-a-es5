export default class Impuestos {
    constructor(monto_bruto, deducciones) {
        this._monto_bruto = monto_bruto;
        this._deducciones = deducciones;
    }
    
    get monto_bruto() {
        return this._monto_bruto
    }

    set monto_bruto(nuevo_monto) {
        this._monto_bruto = nuevo_monto
    }
    
    get deducciones() {
        return this._deducciones
    }

    set deducciones(nuevo_deducciones) {
        this._deducciones = nuevo_deducciones
    }
   
}