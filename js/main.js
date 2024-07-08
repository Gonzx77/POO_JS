class Persona{
    #nombre;
    #edad;
    #sexo;

    constructor (nombre, edad, sexo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
    }


    saludar(){
        return `Hola ${this.#nombre}`;
    }
}


let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let nombre = document.querySelector("#name").value;
    let edad = document.querySelector("#age").value;
    let sexo = document.querySelector("#sex").value;

    let persona1 = new Persona(nombre, edad, sexo);
    console.log(persona1.saludar());
})