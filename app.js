const diasT = document.getElementById("diasT");
const extrasD = document.getElementById("extrasD");
const extrasN = document.getElementById("extrasN");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
const salarioNeto = 1435000;

btnCalcular.addEventListener("click", () => {
    const salarioDiario = salarioNeto / 30;
    const salarioHora = salarioNeto / 240;
    const auxTransporte = (200000 / 30) * diasT.value;
    const salarioExtraDiurno = salarioHora * extrasD.value * 1.25;
    const salarioExtraNocturno = salarioHora * extrasN.value * 1.75;
    const salario =
        diasT.value * salarioDiario + salarioExtraDiurno + salarioExtraNocturno + auxTransporte;
    resultado.textContent = `El salario es: ${salario}`;
});
