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
  let spanPetPlayer = document.getElementById('pet-player');

  if (inputHipodoge.checked) {
    spanPetPlayer.innerHTML = 'Hipodoge';
  } else if (inputCapipepo.checked) {
    spanPetPlayer.innerHTML = 'Capipepo';
  } else if (inputRatigueya.checked) {
    spanPetPlayer.innerHTML = 'Ratigueya';
  } else if (inputLangostelvis.checked) {
    spanPetPlayer.innerHTML = 'Langostel';
  } else if (inputTucapalma.checked) {
    spanPetPlayer.innerHTML = 'Tucapalma';
  } else if (inputPydos.checked) {
    spanPetPlayer.innerHTML = 'Pydos';
  } else {
    console.log('Selecciona una mascota')
  }



}
window.addEventListener('load', iniciarJuego);