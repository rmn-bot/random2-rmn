let container = document.querySelector('.container');

  function mulai() {
    // Play musik
    document.getElementById('musik').play();

    // Sembunyikan overlay
    document.getElementById('overlay').style.display = 'none';

    // Tampilkan SC animasi (container)
    document.querySelector('.container').style.display = 'block';
  }

  // Sembunyikan container awalnya
  document.querySelector('.container').style.display = 'none';
//yang 2 
function mulai() {

  document.getElementById('musik').play();

  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.container').style.display = 'block';

  mulaiLirik(); // mulai lirik setelah tombol diklik
}

function mulaiLirik() {
  const lirikList = Array.from(document.querySelectorAll('.lirik'));
  let index = 0;

  // Sembunyikan semua dulu
  lirikList.forEach(el => el.style.display = 'none');

  function tampilLirik() {
    // Reset jika sudah selesai
    if (index >= lirikList.length) {
      index = 0;
    }

    // Ambil elemen lirik berikutnya
    const current = lirikList[index];
    const waktu = parseInt(current.dataset.waktu) * 1000;

    // Sembunyikan semua lirik
    lirikList.forEach(el => el.style.display = 'none');
    current.style.display = 'block';
    ketikText(current);

    // Jadwalkan lirik berikutnya
    const nextDelay = (index + 1 < lirikList.length)
      ? (parseInt(lirikList[index + 1].dataset.waktu) - parseInt(current.dataset.waktu)) * 1000
      : 5000; // delay sebelum ulang

    setTimeout(() => {
      index++;
      tampilLirik();
    }, nextDelay);
  }

  tampilLirik();
}

// Efek ketik teks (typing effect)
function ketikText(el) {
  const teks = el.textContent;
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < teks.length) {
      el.textContent += teks.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 80); // kecepatan ketik
}
// yang 1

function mulai() {
  document.getElementById('musik').play();
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.container').style.display = 'block';

  mulaiLirik(); // mulai lirik setelah tombol diklik
}

function mulaiLirik() {
  const lirikList = Array.from(document.querySelectorAll('.lirik'));
  let index = 0;

  // Sembunyikan semua dulu
  lirikList.forEach(el => el.style.display = 'none');

  function tampilLirik() {
    // Reset jika sudah selesai
    if (index >= lirikList.length) {
      index = 0;
    }

    // Ambil elemen lirik berikutnya
    const current = lirikList[index];
    const waktu = parseInt(current.dataset.waktu) * 1000;

    // Sembunyikan semua lirik
    lirikList.forEach(el => el.style.display = 'none');
    current.style.display = 'block';
    ketikText(current);

    // Jadwalkan lirik berikutnya
    const nextDelay = (index + 1 < lirikList.length)
      ? (parseInt(lirikList[index + 1].dataset.waktu) - parseInt(current.dataset.waktu)) * 1000
      : 5000; // delay sebelum ulang

    setTimeout(() => {
      index++;
      tampilLirik();
    }, nextDelay);
  }

  tampilLirik();
}

// Efek ketik teks (typing effect)
function ketikText(el) {
  const teks = el.textContent;
  el.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < teks.length) {
      el.textContent += teks.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 80); // kecepatan ketik
}
// end 

window.addEventListener('mousemove',(e)=>{
  
  x = e.pageX;
  y = e.pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
})

window.addEventListener('mouseout',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

 window.addEventListener("touchmove",(e)=>{
  
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
  
  container.style.animation = "none";
  container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  
})

window.addEventListener('touchend',(e)=>{
  container.style.animation = "animate 45s linear infinite";
})

container.addEventListener('mouseover', () => {
  document.querySelectorAll('.love').forEach(el => {
    el.style.opacity = "1";
  });
});
