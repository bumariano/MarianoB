class Productos {
    constructor(precio_unidad, descuento, cantidad) {
        this.precio_unidad = precio_unidad
        this.descuento = descuento
        this.cantidad = cantidad
    }

    calcularTotal() {
        return `{precioTotal = ${this.precioTotal = this.precio_unidad * this.cantidad} }`
    }
    calculorDescuento() {
        return `{precioDescuento = ${this.precioDescuento = this.precio_unidad * this.descuento}}`
    }
    totalDescuento() {
        return `{precioFinal = ${this.precioFinal = this.precioTotal - this.precioDescuento}}`
    }

}

module.export = Productos;