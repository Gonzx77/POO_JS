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
        return `El area del rectangulo es (${this.#ancho}·${this.#largo}) = ${area}m²`;
    }
}









let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let color = document.querySelector("#color").value;
    let ancho = document.querySelector("#ancho").value;
    let largo = document.querySelector("#largo").value;

    let figura1 = new Figura(color);
    let rectangulo1 = new Rectangulo(color, largo, ancho)

    resultDiv.innerHTML = "";
    resultDiv.innerHTML += `${figura1.calcularArea()}<br>`;
    resultDiv.innerHTML += `${rectangulo1.calcularArea()}<br>`;
})