function sumar(n1, n2) {
  const parsedN1 = parseInt(n1, 10);
  const parsedN2 = parseInt(n2, 10);
  const resultado = parsedN1 + parsedN2;
  return resultado;
}

function restar(n1, n2) {
  const parsedN1 = parseInt(n1, 10);
  const parsedN2 = parseInt(n2, 10);
  const resultado = parsedN1 - parsedN2;
  return resultado;
}

function multiplicar(n1, n2) {
  const parsedN1 = parseInt(n1, 10);
  const parsedN2 = parseInt(n2, 10);
  const resultado = parsedN1 * parsedN2;
  return resultado;
}

function dividir(n1, n2) {
  const parsedN1 = parseInt(n1, 10);
  const parsedN2 = parseInt(n2, 10);
  const resultado = parsedN1 / parsedN2;
  return resultado;
}

function mostrar(resultado) {
  const pantalla = document.querySelector('#pantalla');
  pantalla.value = '';
  pantalla.value = resultado;
}

function agregarAlHistorial(operacion, n1, n2, resultado) {
  const DIV_HISTORIAL = document.querySelector('.historial');

  if (n1 !== '' && n2 !== '') {
    const itemHistorial = document.createElement('DIV');
    const tituloItem = document.createElement('H4');
    const parrafoItem = document.createElement('P');

    itemHistorial.classList.add('item-historial');

    tituloItem.textContent = 'Operacion:';
    parrafoItem.textContent = `${n1} ${operacion} ${n2} = ${resultado}`;

    itemHistorial.appendChild(tituloItem);
    itemHistorial.appendChild(parrafoItem);

    DIV_HISTORIAL.appendChild(itemHistorial);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btnLimpiar = document.querySelector('#limpiar');

  const campo1 = document.querySelector('#numero1');
  const campo2 = document.querySelector('#numero2');

  const btnSumar = document.querySelector('#sumar');
  const btnRestar = document.querySelector('#restar');
  const btnMultiplicar = document.querySelector('#multiplicar');
  const btnDividir = document.querySelector('#dividir');

  btnLimpiar.addEventListener('click', () => {
    const pantalla = document.querySelector('#pantalla');
    pantalla.value = '';
  });

  btnSumar.addEventListener('click', () => {
    const valorCampo1 = campo1.value;
    const valorCampo2 = campo2.value;

    const resultado = sumar(valorCampo1, valorCampo2);
    mostrar(resultado);
    agregarAlHistorial('+', valorCampo1, valorCampo2, resultado);
  });

  btnRestar.addEventListener('click', () => {
    const valorCampo1 = campo1.value;
    const valorCampo2 = campo2.value;

    const resultado = restar(valorCampo1, valorCampo2);
    mostrar(resultado);
    agregarAlHistorial('-', valorCampo1, valorCampo2, resultado);
  });

  btnMultiplicar.addEventListener('click', () => {
    const valorCampo1 = campo1.value;
    const valorCampo2 = campo2.value;

    const resultado = multiplicar(valorCampo1, valorCampo2);
    mostrar(resultado);
    agregarAlHistorial('x', valorCampo1, valorCampo2, resultado);
  });

  btnDividir.addEventListener('click', () => {
    const valorCampo1 = campo1.value;
    const valorCampo2 = campo2.value;

    const resultado = dividir(valorCampo1, valorCampo2);
    mostrar(resultado);
    agregarAlHistorial('/', valorCampo1, valorCampo2, resultado);
  });
});
