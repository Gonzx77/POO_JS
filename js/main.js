let formulario = document.querySelector("#center");

let openEjercicio1 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="name" class="inputText" type="text" placeholder="Nombre...">
        <input id="age" class="inputText" type="number" placeholder="Edad...">
        <input id="sex" class="inputText" type="text" placeholder="Sexo...">
        <input id="job" class="inputText" type="text" placeholder="Carrera...">

        <button onclick="ejercicio1()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">
        
    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio1 = openEjercicio1;

let openEjercicio2 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="name" class="inputText" type="text" placeholder="Nombre...">
        <input id="age" class="inputText" type="number" placeholder="Edad...">
        <input id="raza" class="inputText" type="text" placeholder="Raza...">
    
        <button onclick="ejercicio2()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">
        
    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio2 = openEjercicio2;

let openEjercicio3 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="color" class="inputText" type="text" placeholder="Color...">
        <input id="radio" class="inputText" type="number" placeholder="Radio...">

        <button onclick="ejercicio3()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">

    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio3 = openEjercicio3;

let openEjercicio4 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="color" class="inputText" type="text" placeholder="Color...">
        <input id="ancho" class="inputText" type="number" placeholder="Ancho...">
        <input id="largo" class="inputText" type="number" placeholder="Largo...">

        <button onclick="ejercicio4()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">
        
    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio4 = openEjercicio4;

let openEjercicio5 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="marca" class="inputText" type="text" placeholder="Marca...">
        <input id="modelo" class="inputText" type="text" placeholder="Modelo...">
        <input id="velocidad" class="inputText" type="number" placeholder="Velocidad (Km/h)...">
        <input id="combustible" class="inputText" type="number" placeholder="Combustible (L)...">


        <button onclick="ejercicio5()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">
        
    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio5 = openEjercicio5;

let openEjercicio6 = async() =>{
    let plantilla = `
    <div class="formularioDiv">
        <h1 id="title">Formulario</h1>
        <input id="nombre" class="inputText" type="text" placeholder="Nombre...">
        <input id="edad" class="inputText" type="number" placeholder="Edad...">
        <input id="sueldo" class="inputText" type="number" placeholder="Sueldo...">
        <input id="departamento" class="inputText" type="text" placeholder="Departamento...">

        <button onclick="ejercicio6()" id="btn">Registrar</button>
    </div>
    <div id="resultDiv">
        
    </div>`;

    formulario.innerHTML = plantilla;
}
document.openEjercicio6 = openEjercicio6;




class Figura{
    #color;
    #area;

    constructor (color){
        this.#color = color;
    }


    get getColor(){
        return this.#color;
    }


    calcularArea(){
        return `El color de la figura es ${this.#color}`;
    }
}
class Circulo extends Figura {
    #radio;

    constructor(color, radio) {
        super(color)
        this.#radio = radio;
    }

    calcularArea(){
        let area = (Math.PI * (this.#radio**2));
        return `El radio del circulo es (π·${this.#radio}²) = ${area}m²`;
    }
}
class Rectangulo extends Figura {
    #largo;
    #ancho;

    constructor(color, largo, ancho) {
        super(color)
        this.#largo = largo;
        this.#ancho = ancho;
    }

    calcularArea(){
        let area = this.#largo * this.#ancho;
        return `El area del rectangulo es (${this.#largo}·${this.#ancho}) = ${area}m²`;
    }
}


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
        return `${this.#nombre} dice: guau guau<br>`;
    }

    saludar(){
        return `Hola ${this.#nombre}<br>`;
    }
}
class Raza extends Animal{
    #raza;

    constructor(nombre, edad, raza) {
        super(nombre, edad)
        this.#raza = raza;
    }

    moverCola() {
        return `${this.getNombre} es un ${this.#raza} y esta moviendo la cola !<br>`;
    }
}


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
        return `Hola ${this.#nombre}<br>`;
    }
}
class Estudiante extends Persona{
    #carrera;

    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo)
        this.#carrera = carrera;
    }

    estudiar() {
        return `${this.getNombre} está estudiando ${this.#carrera}<br>`;
    }
}


class Vehiculo{
    #marca;
    #modelo;
    #velocidad;

    constructor(marca, modelo, velocidad){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#velocidad = velocidad;
    }

    get getVelocidad(){
        return this.#velocidad;
    }

    acelerar(){
        return parseFloat(this.#velocidad) + 10 + " Km/h <br>";
    }
    convertirKmHEnMph(){
        let kmh = parseFloat(this.#velocidad);
        let mph = kmh / 1.60934;
        return `${kmh} Km/h = ${mph} MPH <br>`;
    }
}
class Coche extends Vehiculo{
    #combustible;

    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad)
        this.#combustible = combustible;
    }

    acelerar() {
        return parseFloat(this.getVelocidad) + 20 + " Km/h <br>";
    }
}


let id = 0;
class Empleado{
    #nombre;
    #edad;
    #sueldo;
    #id;

    constructor(nombre, edad, sueldo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sueldo = sueldo;
    }

    get getSueldo(){
        return parseInt(this.#sueldo);
    }

    get getIdEmpleado(){
        id++;
        return `El ID del empleado es: ${id} <br>`;
    }

    calcularSalarioAnual(){
        let sueldo = parseFloat(this.#sueldo);
        let salario = sueldo * 12;
        return `El salario es de (${sueldo}·12) = ${salario} <br>`;
    }
}
class Gerente extends Empleado{
    #departamento;

    constructor(nombre, edad, salario, departamento){
        super(nombre, edad, salario)
        this.#departamento = departamento;
    }

    calcularSalarioAnual(){
        let sueldo = this.getSueldo;
        let salario = (((sueldo / 100) * 10) + sueldo);
        salario = salario * 12;

        return `El salario es de ((${sueldo} + 10%) · 12) = ${salario} <br>`;
    }
}







let ejercicio6 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let nombre = document.querySelector("#nombre").value;
    let edad = document.querySelector("#edad").value;
    let sueldo = document.querySelector("#sueldo").value;
    let departamento = document.querySelector("#departamento").value;

    let empleado1 = new Empleado(nombre, edad, sueldo);
    let gerente1 = new Gerente(nombre, edad, sueldo, departamento)

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += empleado1.calcularSalarioAnual();
    resultDiv.innerHTML += gerente1.calcularSalarioAnual();
    resultDiv.innerHTML += empleado1.getIdEmpleado;

}
document.ejercicio6 = ejercicio6;

let ejercicio5 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let marca = document.querySelector("#marca").value;
    let modelo = document.querySelector("#modelo").value;
    let velocidad = document.querySelector("#velocidad").value;
    let combustible = document.querySelector("#combustible").value;

    let vehiculo1 = new Vehiculo(marca, modelo, velocidad);
    let coche1 = new Coche(marca, modelo, velocidad, combustible);

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += vehiculo1.acelerar();
    resultDiv.innerHTML += coche1.acelerar();
    resultDiv.innerHTML += vehiculo1.convertirKmHEnMph();

    console.log(vehiculo1);
    console.log(coche1);

}
document.ejercicio5 = ejercicio5;

let ejercicio4 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let color = document.querySelector("#color").value;
    let ancho = document.querySelector("#ancho").value;
    let largo = document.querySelector("#largo").value;

    let figura1 = new Figura(color);
    let rectangulo1 = new Rectangulo(color, largo, ancho)

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += `${figura1.calcularArea()}<br>`;
    resultDiv.innerHTML += `${rectangulo1.calcularArea()}<br>`;

    console.log(figura1);
    console.log(rectangulo1);
}
document.ejercicio4 = ejercicio4;

let ejercicio3 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let color = document.querySelector("#color").value;
    let radio = document.querySelector("#radio").value;

    let figura1 = new Figura(color);
    let circulo1 = new Circulo(color, radio);

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += `${circulo1.calcularArea()}<br>`;

    console.log(figura1);
    console.log(circulo1);
}
document.ejercicio3 = ejercicio3;

let ejercicio2 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let nombre = document.querySelector("#name").value;
    let edad = document.querySelector("#age").value;
    let raza = document.querySelector("#raza").value;

    let animal1 = new Animal(nombre, edad);
    let raza1 = new Raza(nombre, edad, raza);

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += animal1.saludar();
    resultDiv.innerHTML += animal1.getSonido;
    resultDiv.innerHTML += raza1.moverCola();

    console.log(animal1);
    console.log(raza1);
}
document.ejercicio2 = ejercicio2;

let ejercicio1 = async() =>{
    let resultDiv = document.querySelector("#resultDiv");

    let nombre = document.querySelector("#name").value;
    let edad = document.querySelector("#age").value;
    let sexo = document.querySelector("#sex").value;
    let carrera = document.querySelector("#job").value;

    let persona1 = new Persona(nombre, edad, sexo);
    let estudiante1 = new Estudiante(nombre, edad, sexo, carrera);

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += persona1.saludar();
    resultDiv.innerHTML += estudiante1.estudiar();
    resultDiv.innerHTML += `¿Mayor de edad?: ${estudiante1.esMayorEdad}<br>`;

    console.log(persona1);
    console.log(estudiante1);
}
document.ejercicio1 = ejercicio1;


openEjercicio1();