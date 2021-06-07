"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Client1 = /*#__PURE__*/function () {
  function Client1(nombre, impuesto) {
    _classCallCheck(this, Client1);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Client1, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    },
    set: function set(nuevo_impuesto) {
      this._impuesto = nuevo_impuesto;
    }
  }, {
    key: "calcularImpuesto2",
    value: function calcularImpuesto2() {
      return (this._impuesto._monto_bruto - this._impuesto._deducciones) * 0.21;
    }
  }]);

  return Client1;
}();

exports["default"] = Client1;