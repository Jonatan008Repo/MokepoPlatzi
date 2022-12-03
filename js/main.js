let atackPlayer;
function iniciarJuego() {
  let botonMascota = document.getElementById('boton-mascota');
  botonMascota.addEventListener('click', seleccionarMascotaJugador);
  let btnFuego = document.getElementById('btn-fuego');
  btnFuego.addEventListener('click', atackFire)
  let btnAgua = document.getElementById('btn-agua');
  btnAgua.addEventListener('click', atackWater);
  let btnTierra = document.getElementById('btn-tierra');
  btnTierra.addEventListener('click', atackGround);
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
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let spanPetEnemy = document.getElementById('pet-enemy');
  let petenemigo = aleatorio(1, 6);
  if (petenemigo == 1) {
    spanPetEnemy.innerHTML = 'Hipodoge';
  } else if (petenemigo == 2) {
    spanPetEnemy.innerHTML = 'Capipepo';
  } else if (petenemigo == 3) {
    spanPetEnemy.innerHTML = 'Ratigueya';
  } else if (petenemigo == 5) {
    spanPetEnemy.innerHTML = 'Langostel';
  } else if (petenemigo == 5) {
    spanPetEnemy.innerHTML = 'Tucapalma';
  } else if (petenemigo == 6) {
    spanPetEnemy.innerHTML = 'Pydos';
  } else {
    console.log('error de enemigo');
  }
}

function atackFire() {
  atackPlayer = 'Fuego';
  alert(atackPlayer);
}
function atackWater() {
  atackPlayer = 'Agua';
  alert(atackPlayer);
}
function atackGround() {
  atackPlayer = 'Tierra';
  alert(atackPlayer);
}



function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);