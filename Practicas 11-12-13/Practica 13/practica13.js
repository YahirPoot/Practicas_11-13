class Calificacion {
    constructor(datos) {
        this.datos = datos;
    }

    calcularPromedio() {
        return this.datos.map(alumno => {
            const suma = alumno.reduce((a, b) => a + b, 0);
            return suma / alumno.length;
        });
    }

    CalcularPromedioAlto() {
        const promedios = this.calcularPromedio();
        return Math.max(...promedios);
    }

    calcularPromedioBajo() {
        const promedios = this.calcularPromedio();
        return Math.min(...promedios);
    }

    contarParcialesReprobados() {
        const notas = this.datos.flat();
        return notas.filter(nota => nota < 7.0).length;
    }

    CalcularRangoCalificaciones() {
        const promedios = this.calcularPromedio();
        const rango = {
            '0-4.9': 0,
            '5.0-5.9': 0,
            '6.0-6.9': 0,
            '7.0-7.9': 0,
            '8.0-8.9': 0,
            '9.0-10': 0            
        };

        promedios.forEach(promedio => {
            if(promedio >= 0 && promedio  <= 4.9) {
                rango['0-4.9']++;
            } else if(promedio >= 5.0 && promedio <= 5.9) {
                rango['5.0-5.9']++;
            } else if(promedio >= 6.0 && promedio <= 6.9) {
                rango['6.0-6.9']++;
            } else if(promedio >= 7.0 && promedio <= 7.9) {
                rango['7.0-7.9']++;
            } else if(promedio >= 8.0 && promedio <= 8.9) {
                rango['8.0-8.9']++;
            } else {
                rango['9.0-10']++;
            }
        });
        return rango;
    }
}

const datos =  [
    [5.5, 8.6, 10],
    [8.0, 5.5, 10],
    [9.0, 4.1, 7.8],
    [10, 2.2, 8.1],
    [7.0, 9.2, 7.1],
    [9.0, 4.0, 6.0],
    [6.5, 5.0, 5.0],
    [4.0, 7.0, 4.0],
    [8.0, 8.0, 9.0],
    [10, 9.0, 9.2],
    [5.0, 10, 8.4],
    [9.0, 4.6, 7.5],
];

const calificacion = new Calificacion(datos);

const tablaCalificacionesBody = document.getElementById('calificacionesBody');
tablaCalificacionesBody.innerHTML = '';

for (let i = 0; i < datos.length; i++) {
    const fila = document.createElement('tr');
    const alumno = i + 1;

    const celdaAlumno = document.createElement('td');
    celdaAlumno.textContent = `Alumno ${alumno}`;
    fila.appendChild(celdaAlumno);

    for (let j = 0; j < datos[i].length; j++) {
        const celda = document.createElement('td');
        celda.textContent = datos[i][j].toFixed(1);
        fila.appendChild(celda);
    }

    tablaCalificacionesBody.appendChild(fila);
}

document.getElementById('respuestaBtn').addEventListener('click', function() {
    const promediosLista = document.getElementById('promediosAlumnos');
    const promediosAlumnos = calificacion.calcularPromedio();
    promediosLista.innerHTML = '';
    promediosAlumnos.forEach((promedio, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Alumno ${index + 1}: ${promedio.toFixed(2)}`;
        promediosLista.appendChild(listItem);

    });

    document.getElementById('promedioMasAlto').textContent = `Promedio más alto: ${calificacion.CalcularPromedioAlto().toFixed(2)}`;
    document.getElementById('promedioMasBajo').textContent = `Promedio más bajo: ${calificacion.calcularPromedioBajo().toFixed(2)}`;
    document.getElementById('parcialesReprobados').textContent = `Parciales reprobados: ${calificacion.contarParcialesReprobados()}`;

    const rangoCalificacionList = document.getElementById('rangoCalificaciones');
    const rango = calificacion.CalcularRangoCalificaciones();
    rangoCalificacionList.innerHTML = '';
    for (const rangos in rango) {
        const listItem = document.createElement('li');
        listItem.textContent = `${rangos}: ${rango[rangos]} Alumnos`;
        rangoCalificacionList.appendChild(listItem);
    }

});