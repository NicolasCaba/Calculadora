document.addEventListener("DOMContentLoaded", () => {
	const BTN_LIMPIAR = document.querySelector("#limpiar");

	const CAMPO1 = document.querySelector("#numero1");
	const CAMPO2 = document.querySelector("#numero2");

	const BTN_SUMAR = document.querySelector("#sumar");
	const BTN_RESTAR = document.querySelector("#restar");
	const BTN_MULTIPLICAR = document.querySelector("#multiplicar");
	const BTN_DIVIDIR = document.querySelector("#dividir");

	BTN_LIMPIAR.addEventListener("click", function (event) {
		const PANTALLA = document.querySelector("#pantalla");
		PANTALLA.value = "";
	});

	BTN_SUMAR.addEventListener("click", function (event) {
		let valorCampo1 = CAMPO1.value;
		let valorCampo2 = CAMPO2.value;

		let resultado = sumar(valorCampo1, valorCampo2);
		mostrar(resultado);
		agregarAlHistorial("+", valorCampo1, valorCampo2, resultado);
	});

	BTN_RESTAR.addEventListener("click", function (event) {
		let valorCampo1 = CAMPO1.value;
		let valorCampo2 = CAMPO2.value;

		let resultado = restar(valorCampo1, valorCampo2);
		mostrar(resultado);
		agregarAlHistorial("-", valorCampo1, valorCampo2, resultado);
	});

	BTN_MULTIPLICAR.addEventListener("click", function (event) {
		let valorCampo1 = CAMPO1.value;
		let valorCampo2 = CAMPO2.value;

		let resultado = multiplicar(valorCampo1, valorCampo2);
		mostrar(resultado);
		agregarAlHistorial("x", valorCampo1, valorCampo2, resultado);
	});

	BTN_DIVIDIR.addEventListener("click", function (event) {
		let valorCampo1 = CAMPO1.value;
		let valorCampo2 = CAMPO2.value;

		let resultado = dividir(valorCampo1, valorCampo2);
		mostrar(resultado);
		agregarAlHistorial("/", valorCampo1, valorCampo2, resultado);
	});
});

function sumar(n1, n2) {
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	let resultado = n1 + n2;
	return resultado;
}

function restar(n1, n2) {
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	let resultado = n1 - n2;
	return resultado;
}

function multiplicar(n1, n2) {
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	let resultado = n1 * n2;
	return resultado;
}

function dividir(n1, n2) {
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	let resultado = n1 / n2;
	return resultado;
}

function mostrar(resultado) {
	const PANTALLA = document.querySelector("#pantalla");
	PANTALLA.value = "";
	PANTALLA.value = resultado;
}

function agregarAlHistorial(operacion, n1, n2, resultado) {
	const DIV_HISTORIAL = document.querySelector(".historial");

	if (n1 != "" && n2 != "") {
		let itemHistorial = document.createElement("DIV");
		let tituloItem = document.createElement("H4");
		let parrafoItem = document.createElement("P");

		itemHistorial.classList.add("item-historial");

		tituloItem.textContent = "Operacion:";
		parrafoItem.textContent = n1 + operacion + n2 + "=" + resultado;

		itemHistorial.appendChild(tituloItem);
		itemHistorial.appendChild(parrafoItem);

		DIV_HISTORIAL.appendChild(itemHistorial);
	}
}
