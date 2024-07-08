class Animal{
    #nombre;
    #edad;

    constructor (nombre, edad, sexo){
        this.#nombre = nombre;
        this.#edad = edad;
    }


    get getNombre(){
        return this.#nombre;
    }
    get getSonido(){
        return "guau guau";
    }


    saludar(){
        return `Hola ${this.#nombre}`;
    }
}


class Raza extends Animal {
    #raza;

    constructor(nombre, edad, raza) {
        super(nombre, edad)
        this.#raza = raza;
    }

    moverCola() {
        return `${this.getNombre} es un ${this.#raza} y esta moviendo la cola !`;
    }
}










let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let nombre = document.querySelector("#name").value;
    let edad = document.querySelector("#age").value;
    let raza = document.querySelector("#raza").value;

    let animal1 = new Animal(nombre, edad);
    let raza1 = new Raza(nombre, edad, raza);

    console.log(animal1.saludar());
    console.log(animal1.getSonido);
    console.log(raza1.moverCola());
})