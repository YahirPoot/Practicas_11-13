class Matriz {
    constructor(filas, columnas) {
        this.filas = filas; 
        this.columnas = columnas;
        this.matriz = this.llenarMatriz();
    }

    llenarMatriz() {
        const matriz = [];
        for(let i = 0; i < this.filas; i ++) {
            matriz[i] = [];
            for(let x = 0; x < this.columnas; x++) {
                matriz[i][x] = Math.floor(Math.random() * 10) + 1;
            }
        }
        return matriz;
    }

    calcularSumaFila(fila) {
        return this.matriz[fila].reduce((a, b) => a + b, 0);
    }

    calcularPromedioFila(fila) {
        const sumaF = this.calcularSumaFila(fila);
        return sumaF / this.matriz[fila].length;
    }

    calcularSumaColumna(columna) {
        return this.matriz.reduce((a, b) => a + b[columna], 0);
    }

    calcularPromedioColumna(columna) {
        const sumaC = this.calcularSumaColumna(columna);
        return sumaC / this.matriz.length;
    }

    imprimirMatrizResultado() {
        const matrizTable = document.getElementById('matrizTable');
        for(let i = 0; i < this.matriz.length; i++) {
            const fila = document.createElement('tr');
            for(let x = 0; x < this.matriz[i].length; x++) {
                const celda = document.createElement('td');
                celda.textContent = this.matriz[i][x];
                fila.appendChild(celda);
            }
            matrizTable.appendChild(fila);
        }
        const A = [];
        const B = [];
        const C = [];
        const D = [];

        for (let i = 0; i < this.matriz.length; i++) {
            A.push(this.calcularSumaFila(i));
            B.push(this.calcularPromedioFila(i));
        }

        for (let x = 0; x < this.matriz[0].length; x++) {
            C.push(this.calcularSumaColumna(x));
            D.push(this.calcularPromedioColumna(x));
        }

        document.getElementById('resultadoA').textContent = A.join(' ');
        document.getElementById('resultadoB').textContent = B.join(' ');
        document.getElementById('resultadoC').textContent = C.join(' ');
        document.getElementById('resultadoD').textContent = D.join(' ');
    }
}

const matrizObj = new Matriz(5, 10);
document.addEventListener('DOMContentLoaded', function () {
    matrizObj.imprimirMatrizResultado(); 
});
