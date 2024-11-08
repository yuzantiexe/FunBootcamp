// Tentukan tanggal dan waktu acara
const eventDate = new Date("Dec 21, 2024 08:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = eventDate - now;

  if (timeRemaining < 0) {
    document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Memanggil sekali untuk tampilan awal

// function submitToWhatsApp() {
//   // Mengambil data dari form
//   const childName = document.getElementById("childName").value;
//   const schoolName = document.getElementById("schoolName").value;
//   const childAge = document.getElementById("childAge").value;
//   const parentName = document.getElementById("parentName").value;
//   const phoneNumber = document.getElementById("phoneNumber").value;
//   const emailAddres = document.getElementById("emailAddres").value;

//   // Cek jika semua data telah diisi
//   if (childName && childAge && parentName && phoneNumber && emailAddres) {
//     // Membuat pesan untuk WhatsApp
//     const message = `Halo! Saya ingin mendaftar untuk Bootcamp Inorobo:\n` +
//                     `- *Nama Anak:* ${childName}\n` +
//                     `- *Usia Anak:* ${childAge} tahun\n` +
//                     `- *Asal Sekolah:* ${schoolName} tahun\n` +
//                     `- *Nama Orang Tua:* ${parentName}\n` +
//                     `- *Nomor Telepon:* ${phoneNumber}\n` +
//                     `- *Alamat Email:* ${emailAddres}`;

//     // Encode pesan untuk URL WhatsApp
//     const whatsappURL = `https://wa.me/628?text=${encodeURIComponent(message)}`;
    
//     // Arahkan ke URL WhatsApp
//     window.open(whatsappURL, "_blank");
//   } else {
//     alert("Silakan lengkapi semua data sebelum mendaftar.");
//   }
//}

// URL Google Apps Script untuk menyimpan data
const scriptURL = 'https://script.google.com/macros/s/AKfycbydY2haNf8rahKuwSM1o-9cAL_0wVDgbc04aSdyzyG0qnie1xTw2uBXgwfH5-lhm1YfUw/exec';

function submitToWhatsApp() {
  // Ambil nilai dari form
  const childName = document.getElementById("childName").value;
  const schoolName = document.getElementById("schoolName").value;
  const childAge = document.getElementById("childAge").value;
  const parentName = document.getElementById("parentName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const emailAddres = document.getElementById("emailAddres").value;

  // Buat data untuk dikirim ke Google Apps Script
  const formData = new FormData();
  formData.append('nama_anak', childName);
  formData.append('usia_anak', childAge);
  formData.append('asal_sekolah', schoolName);
  formData.append('nama_orang_tua', parentName);
  formData.append('nomor_telepon', phoneNumber);
  formData.append('email_address', emailAddres);

  // Jika berhasil, buka WhatsApp dengan pesan
  const whatsappMessage = `Halo, saya ingin mendaftarkan anak saya untuk Mengikuti Fun Bootcamp Inorobo:
- *Nama Anak:* ${childName}
- *Usia Anak:* ${childAge} tahun
- *Asal Sekolah:* ${schoolName}
- *Nama Orang Tua:* ${parentName}
- *Nomor Telepon:* ${phoneNumber}
- *Alamat Email:* ${emailAddres}`;
        
  const whatsappURL = `https://wa.me/6281299914159?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');

  // Kirim data ke Google Apps Script
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      // Tetap direct ke WhatsApp, berhasil atau tidaknya request ke Google Apps Script
      console.log('Data berhasil dikirim ke Google Sheets');
      window.open(whatsappURL, '_blank');
    })
    .catch(error => {
      console.error('Error!', error.message);
      // Jika terjadi kesalahan, tetap lanjut ke WhatsApp
      window.open(whatsappURL, '_blank');
    });

}
