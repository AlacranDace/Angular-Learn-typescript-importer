
//Decoradores de Clases
//Una función que recibe una funcion. Un decorador es algo que se coloca antes de la definición de la clase
//El decorador nos sirve para añadirle funcionalidades a nuestra clase
function imprimirConsola(constructorClase: Function){
    console.log(constructorClase);
}

//Al tener decoradores especificos en cada clase de angular, angular le dice que esta clase va a ser un servicio, un componente, un atributo... 
//Esto lo utiliza angular para transformar mis clases en otras.
//Un decorador es una función que expande la clase añadiendole caraterísticas y propiedades propias.

@imprimirConsola
//Este export es lo que nos permite hacernos un import. Es como poner la clase pública y si no lo ponemos pues la clase será privada
export class Xmen {

    constructor(
        public nombre: string,
        public clave : string
    ){}
    
    imprimir() {
        console.log(` ${this.nombre} - ${this.clave} `)
    }
}