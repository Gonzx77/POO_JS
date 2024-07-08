class Persona{
    #nombre;
    #edad;
    #sexo;

    constructor (nombre, edad, sexo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
    }

    get getNombre(){
        return this.#nombre;
    }

    get esMayorEdad(){
        if (this.#edad >= 18){
            return true;
        }else{
            return false;
        }
    }


    saludar(){
        return `Hola ${this.#nombre}`;
    }
}

class Estudiante extends Persona {
    #carrera;

    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo)
        this.#carrera = carrera;
    }

    estudiar() {
        return `${this.getNombre} está estudiando ${this.#carrera}`;
    }
}










let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let nombre = document.querySelector("#name").value;
    let edad = document.querySelector("#age").value;
    let sexo = document.querySelector("#sex").value;
    let carrera = document.querySelector("#job").value;

    let persona1 = new Persona(nombre, edad, sexo);
    let estudiante1 = new Estudiante(nombre, edad, sexo, carrera);

    console.log(persona1.saludar());
    console.log(estudiante1.estudiar());
    console.log(`¿Mayor de edad?: ${estudiante1.esMayorEdad}`);
})