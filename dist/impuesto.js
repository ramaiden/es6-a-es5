"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto = monto_bruto;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "monto_bruto",
    get: function get() {
      return this._monto_bruto;
    },
    set: function set(nuevo_monto) {
      this._monto_bruto = nuevo_monto;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevo_deducciones) {
      this._deducciones = nuevo_deducciones;
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;