function iniciarJuego() {
  let botonMascota = document.getElementById('boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascotaJugador);
}
function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let inputLangostelvis = document.getElementById('langostelvis');
  let inputTucapalma = document.getElementById('tucapalma');
  let inputPydos = document.getElementById('pydos');

  if (inputHipodoge.checked) {
    console.log('Seleccionaste a Hipodoge    ')
  } else if (inputCapipepo.checked) {
    console.log('Seleccionaste a Capipepo    ')
  } else if (inputRatigueya.checked) {
    console.log('Seleccionaste a Ratigueya   ')
  } else if (inputLangostelvis.checked) {
    console.log('Seleccionaste a Langostelvis')
  } else if (inputTucapalma.checked) {
    console.log('Seleccionaste a Tucapalma   ')
  } else if (inputPydos.checked) {
    console.log('Seleccionaste a Pydos    ')
  } else {
    console.log('Selecciona una mascota')
  }



}
window.addEventListener('load', iniciarJuego);