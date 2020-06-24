# MarianoB
Repositorio materia Programacion.

## Trabajo Integrador 1
1. Explicar y ejemplificar composición y agregación.
2. Explicar que es polimorfismo.
3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
4. Codificar el ejemplo del punto 3 con Javascript.
---
## PUNTO 1
**Composicion:** La composición de objetos es una forma de combinar objetos o tipos de datos en otros más complejos. Las composiciones se relacionan con, pero no son las mismas que, las estructuras de datos y las que son más comunes son la unión etiquetada, el conjunto, la secuencia y varias estructuras gráficas, así como el objeto utilizado en la programación orientada a objetos.

![ejemplo](https://image.slidesharecdn.com/programacionorientadaaobjetos-150301113840-conversion-gate02/95/programacion-orientada-a-objetos-14-638.jpg?cb=1425210024)


**Agregacion:** La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas).

![ejemplo](https://www.seas.es/blog/wp-content/uploads/ScreenShot081.png)

---
## PUNTO 2
**Polimorfismo:** En programación orientada a objetos, el polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía.

---
## PUNTO 3

En este caso se va a trabajar sobre un local de venta de ropa. Para el cual lo que se desea hacer es que dependiendo lel tipo de ropa que se lleva el cliente se da un descuento sobre la misma, se va a detallar que si se lleva una remera el desuento es de un 5%, un pantalon 10% y un buzo o campera el descuento sera de un 15%. Se va a trabajar sobre una base de $800 y se devolvera o mostrara un especie de tiquet con las prendas compradas descuentos y totales.