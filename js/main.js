class Calculadora {
    constructor() {
        this.pantalla = document.querySelector(".pantalla");
        this.botones = document.querySelectorAll(".btn");
        this.pantalla.textContent = "0";

        this.botones.forEach(boton => {
            boton.addEventListener("click", () => {
                this.handleClick(boton);
            });
        });
    }

    handleClick(boton) {
        const botonSelect = boton.textContent;

        if (boton.id === "c") {
            this.borrarpantalla();
            return;
        }

        if (boton.id === "borrar") {
            this.borrar();
            return;
        }

        if (boton.id === "igual") {
            this.calculateResult();
            return;
        }

        if (this.pantalla.textContent === "0" || this.pantalla.textContent === "SyntaxError") {
            this.pantalla.textContent = botonSelect;
        } else {
            this.appendToScreen(botonSelect);
        }
    }

    borrarpantalla() {
        this.pantalla.textContent = "0";
    }

    borrar() {
        if (this.pantalla.textContent.length === 1 || this.pantalla.textContent === "SyntaxError") {
            this.pantalla.textContent = "0";
        } else {
            this.pantalla.textContent = this.pantalla.textContent.slice(0, -1);
        }
    }

    appendToScreen(content) {
        const newContent = this.pantalla.textContent + content;
        if (this.checkOverflow(newContent)) {
            this.pantalla.textContent = "Overflow";
        } else {
            this.pantalla.textContent = newContent;
        }
    }

    checkOverflow(content) {
       
        const maxCharacters = 14;
        return content.length > maxCharacters;
    }

    calculateResult() {
        try {
            this.pantalla.textContent = eval(this.pantalla.textContent);
        } catch {
            this.pantalla.textContent = "SyntaxError";
        }
    }
}

const calculadora = new Calculadora();
