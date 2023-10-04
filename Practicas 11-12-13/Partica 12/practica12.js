class Venta {
    constructor(datosVenta) {
        this.datosVenta = datosVenta;
    }

    minimaVenta() {
        let menorVenta = this.datosVenta[0][0];
        let mesMenorVenta = 0;
        let diaMenorVenta = 0;

        for (let i = 0; i < this.datosVenta.length; i++) {
            for (let x = 0; x < this.datosVenta[i].length; x++) {
                if (this.datosVenta[i][x] < menorVenta) {
                    menorVenta = this.datosVenta[i][x];
                    mesMenorVenta = i;
                    diaMenorVenta = x;
                }
            }
        }

        return { valor: menorVenta, mes: mesMenorVenta, dia: diaMenorVenta };
    }

    maximaVenta() {
        let mayorVenta = this.datosVenta[0][0];
        let mesMayorVenta = 0;
        let diaMayorVenta = 0;

        for (let i = 0; i < this.datosVenta.length; i++) {
            for (let x = 0; x < this.datosVenta[i].length; x++) {
                if (this.datosVenta[i][x] > mayorVenta) {
                    mayorVenta = this.datosVenta[i][x];
                    mesMayorVenta = i;
                    diaMayorVenta = x;
                }
            }
        }

        return { valor: mayorVenta, mes: mesMayorVenta, dia: diaMayorVenta };
    }

    calcularVentaTotal() {
        let total = 0;
        for (let i = 0; i < this.datosVenta.length; i++) {
            for (let x = 0; x < this.datosVenta[i].length; x++) {
                total += this.datosVenta[i][x];
            }
        }
        return total;
    }

    calcularVentaPorDia() {
        const ventaPorDia = [];
        for (let x = 0; x < this.datosVenta[0].length; x++) {
            let totalDia = 0;
            for (let i = 0; i < this.datosVenta.length; i++) {
                totalDia += this.datosVenta[i][x];
            }
            ventaPorDia.push(totalDia);
        }
        return ventaPorDia;
    }
}

const datosVenta = [
    [5, 16, 10, 12, 24],
    [40, 55, 10, 11, 18],
    [15, 41, 78, 14, 51],
    [35, 22, 81, 15, 12],
    [50, 12, 71, 10, 20],
    [70, 40, 60, 28, 22],
    [50, 50, 50, 36, 25],
    [40, 70, 40, 11, 20],
    [20, 20, 30, 12, 18],
    [10, 40, 32, 13, 16],
    [50, 3, 24, 25, 82],
    [40, 46, 15, 46, 22]
];

const ventas = new Venta(datosVenta);

function actualizarTablaYResultados() {
    const menorVenta = ventas.minimaVenta();
    const mayorVenta = ventas.maximaVenta();
    const ventaTotal = ventas.calcularVentaTotal();
    const ventaPorDia = ventas.calcularVentaPorDia();

    document.getElementById('menorVentaDia1').textContent = `$${menorVenta.valor}`;
    document.getElementById('menorVentaDia2').textContent = `Mes ${menorVenta.mes + 1}, Día ${menorVenta.dia + 1}`;
    document.getElementById('mayorVentaDia1').textContent = `$${mayorVenta.valor}`;
    document.getElementById('mayorVentaDia2').textContent = `Mes ${mayorVenta.mes + 1}, Día ${mayorVenta.dia + 1}`;
    document.getElementById('ventaTotal').textContent = `$${ventaTotal.toFixed(2)}`;

    // const ventaDia = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    // for (let i = 0; i < ventaPorDia.length; i++) {
    //     document.getElementById(`ventaDia${i + 1}`).textContent = `${ventaDia[i]}: $${ventaPorDia[i] + 1}`;
    // }

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const table = document.querySelector('table');
    const tbody = document.createElement('tbody');

    for (let i = 0; i < datosVenta.length; i++) {
        const row = document.createElement('tr');
        const mes = document.createElement('td');
        ventaDia = document.createElement('th');
        mes.textContent = meses[i];

        row.appendChild(mes);

        for (let j = 0; j < datosVenta[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = datosVenta[i][j];
            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.innerHTML = '';
    table.appendChild(tbody);
}

actualizarTablaYResultados();
