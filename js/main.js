let resultDiv = document.querySelector("#resultDiv");

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
        return true;
    }
}










let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let color = document.querySelector("#color").value;
    let radio = document.querySelector("#radio").value;

    let figura1 = new Figura(color);
    let circulo1 = new Circulo(color, radio);
    let rectangulo1 = new Rectangulo(color, largo, ancho)

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += `${figura1.calcularArea()}<br>`;
    resultDiv.innerHTML += `${circulo1.calcularArea()}<br>`;
})