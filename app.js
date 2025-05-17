const diasT = document.getElementById("diasT");
const extrasD = document.getElementById("extrasD");
const extrasN = document.getElementById("extrasN");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
const salarioNeto = 1435000;

btnCalcular.addEventListener("click", (event) => {
    event.preventDefault();

    const salarioDiario = salarioNeto / 30;
    const salarioHora = salarioNeto / 240;
    const auxTransporte = (200000 / 30) * diasT.value;
    const salarioExtraDiurno = salarioHora * extrasD.value * 1.25;
    const salarioExtraNocturno = salarioHora * extrasN.value * 1.75;

    const salario =
        diasT.value * salarioDiario +
        salarioExtraDiurno +
        salarioExtraNocturno +
        auxTransporte;

    const mensajeSalario = document.getElementById("mensajeSalario");
    mensajeSalario.textContent = `El salario es: ${salario.toFixed(2)}`;

    const documento = document.getElementById("documento").value;
    const nombre = document.getElementById("nombre").value;
    const cuenta = document.getElementById("cuenta").value;

    const cuerpoTabla = document.getElementById("cuerpoTabla");
    const nuevaFila = document.createElement("tr");

    nuevaFila.innerHTML = `
        <td>${documento}</td>
        <td>${nombre}</td>
        <td>${cuenta}</td>
        <td>${diasT.value}</td>
        <td>${extrasD.value}</td>
        <td>${extrasN.value}</td>
        <td>${salario.toFixed(2)}</td>
    `;

    cuerpoTabla.appendChild(nuevaFila);
});
