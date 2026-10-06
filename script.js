const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

if (localStorage.getItem('tema') === 'terang') {
  bodyHalaman.classList.add('light-mode');
  btnTema.textContent = '🌙 Mode Gelap';
}


btnTema.addEventListener('click', function() {      
  bodyHalaman.classList.toggle('light-mode');

  if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap';
    localStorage.setItem('tema', 'terang');
  } else {
    btnTema.textContent = '☀️ Mode Terang';
    localStorage.setItem('tema', 'gelap');
  }
});                                                    

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
  event.preventDefault();
  elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
  elemenModal.classList.remove('show');
});

const btnbukaInstagram = document.querySelector('#btnInstagram');
const elemenModalInstagram = document.querySelector('#modalInstagram');
const btnTutupInstagram = document.querySelector('#btnTutupInstagram');

btnbukaInstagram.addEventListener('click', function(event) {
  event.preventDefault();
  elemenModalInstagram.classList.add('show');
});

btnTutupInstagram.addEventListener('click', function() {
  elemenModalInstagram.classList.remove('show');
});