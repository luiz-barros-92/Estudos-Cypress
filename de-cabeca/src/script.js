window.onload = function() { 
  document.getElementById("ano").innerHTML = new Date().getFullYear(); 
}

const linksInternos = document.querySelectorAll('a[href^="#"]');
linksInternos.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const offset = link.getAttribute('data-offset');
    const elemento = document.getElementById(link.href.split('#')[1]);
    window.scrollTo({ top: elemento.offsetTop - offset, behavior: 'smooth' });
  });
});

function calcularPorc1() {
  const valor1 = parseFloat(document.getElementById('porc1').value);
  const valor2 = parseFloat(document.getElementById('porc2').value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira apenas valores numéricos!");
    return;
  }

  const resultado = (valor1 / 100) * valor2;
  document.getElementById('outPorc1').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

function calcularPorc2() {
  const valor3 = parseFloat(document.getElementById('porc3').value);
  const valor4 = parseFloat(document.getElementById('porc4').value);

  if (isNaN(valor3) || isNaN(valor4)) {
    alert("Por favor, insira apenas valores numéricos!");
    return;
  }

  const resultado = valor3 + (valor3 * (valor4 / 100));
  document.getElementById('outPorc2').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

function calcularPorc3() {
  const valor5 = parseFloat(document.getElementById('porc5').value);
  const valor6 = parseFloat(document.getElementById('porc6').value);

  if (isNaN(valor5) || isNaN(valor6)) {
    alert("Por favor, insira apenas valores numéricos!");
    return;
  }

  const resultado = valor5 - (valor5 * (valor6 / 100));
  document.getElementById('outPorc3').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

const selectUnidade = document.getElementById('unidade');
const outUnidade1 = document.getElementById('outUnidade1');
const outUnidade2 = document.getElementById('outUnidade2');
const outUnidade3 = document.getElementById('outUnidade3');
const outUnidade4 = document.getElementById('outUnidade4');
const outUnidade5 = document.getElementById('outUnidade5');

selectUnidade.addEventListener('change', () => {
  const unidadeSelecionada = selectUnidade.value;
  const unidadeExibida = getUnidadeExibida(unidadeSelecionada);

  outUnidade1.value = unidadeExibida;
  outUnidade2.value = unidadeExibida;
  outUnidade3.value = `${unidadeExibida}²`;
  outUnidade4.value = `${unidadeExibida}²`;
  outUnidade5.value = `${unidadeExibida}³`;
});

function getUnidadeExibida(unidade) {
  switch (unidade) {
    case 'mm':
      return 'mm';
    case 'cm':
      return 'cm';
    case 'm':
      return 'm';
    case 'km':
      return 'km';
    default:
      return '';
  }
}

function calcularRaio() {
  const raio = parseFloat(document.getElementById('raio').value);

  if (isNaN(raio) || raio < 0) {
    alert("Por favor, insira apenas valores numéricos positivos!");
    return;
  }

  const diametro = raio * 2;
  const circunferencia = 2 * 3.1415 * raio;
  const areaCirc = 3.1415 * (raio ** 2);
  const areaEsf = 4 * 3.1415 * (raio ** 2);
  const volumeEsf = (4 * 3.1415 * (raio ** 3)) / 3;

  document.getElementById('outResultado1').value = `${diametro.toFixed(2).replace('.', ',')}`;
  document.getElementById('outResultado2').value = `${circunferencia.toFixed(2).replace('.', ',')}`;
  document.getElementById('outResultado3').value = `${areaCirc.toFixed(2).replace('.', ',')}`;
  document.getElementById('outResultado4').value = `${areaEsf.toFixed(2).replace('.', ',')}`;
  document.getElementById('outResultado5').value = `${volumeEsf.toFixed(2).replace('.', ',')}`;  
}

function regra3Simp() { 
  const a = parseFloat(document.getElementById('a3').value);
  const b = parseFloat(document.getElementById('b3').value);
  const c = parseFloat(document.getElementById('c3').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Por favor, insira apenas valores numéricos!");    
    return;
  }

  const resultado = (b * c) / a;
  document.getElementById('out3Simp').value = `${resultado.toFixed(2).replace('.', ',')}`;
}

function kmParaMilha() {
  const km = parseFloat(document.getElementById('km').value);

  if (isNaN(km)) {
    alert("Por favor, insira apenas valores numéricos!");    
    return;
  }

  const resultado = km / 1.609;
  document.getElementById('milha').value = `${resultado.toFixed(2).replace('.', ',')} Milhas`;
}

function milhaParaKm() {
  const milha = parseFloat(document.getElementById('milhaIn').value);

  if (isNaN(milha)) {
    alert("Por favor, insira apenas valores numéricos!");    
    return;
  }

  const resultado = milha * 1.609;
  document.getElementById('quilometro').value = `${resultado.toFixed(2).replace('.', ',')} Km`;
}


function celsiusPara() {
  const celsius = parseFloat(document.getElementById('celsius').value);

  if (isNaN(celsius)) {
    alert("Por favor, insira apenas valores numéricos!");    
    return;
  }

  const resultado = (celsius * 1.8) + 32;
  document.getElementById('fahren').value = `${resultado.toFixed(2).replace('.', ',')} °F`;
}

function fahrenPara() {
  const fahren = parseFloat(document.getElementById('fahrenInput').value);

  if (isNaN(fahren)) {
    alert("Por favor, insira apenas valores numéricos!");    
    return;
  }

  const resultado = (fahren - 32) / 1.8;
  document.getElementById('celsiusOutput').value = `${resultado.toFixed(2).replace('.', ',')} °C`;

}