/* ==========================================
   EFEK BACKGROUND MATRIX TEXT RAIN
   ========================================== */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Bikin ukuran canvas seukuran layar penuh
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- CUSTOM NAMA LU DI SINI ---
// Huruf-huruf ini yang bakal berjatuhan jadi hujan Matrix
const textMatrix = "AllStudio"; 
const characters = textMatrix.split(''); // Memecah kata jadi per huruf

const fontSize = 14; // Ukuran huruf matrix-nya
const columns = canvas.width / fontSize; // Menghitung jumlah kolom vertikal

// Array untuk menyimpan posisi jatuhnya (koordinat Y) tiap kolom
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    // 1. Bikin efek bayangan buntut (ekor teks) yang memudar perlahan
    // Semakin kecil angka 0.05, semakin panjang ekornya
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Setting warna teks (Hijau Matrix Neon)
    ctx.fillStyle = '#00ff66'; 
    ctx.font = fontSize + 'px monospace';

    // 3. Proses menjatuhkan teks
    for (let i = 0; i < drops.length; i++) {
        // Pilih huruf acak dari nama lu
        const text = characters[Math.floor(Math.random() * characters.length)];

        // Cetak huruf di layar
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Kalau teks udah nyentuh bawah layar, reset posisinya ke atas
        // Dikasih Math.random() biar jatuhnya acak dan natural, gak barengan
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Tambah kordinat Y biar teks meluncur ke bawah
        drops[i]++;
    }
}

// Jalankan animasi dengan kecepatan 35 milidetik (makin kecil makin ngebut)
setInterval(drawMatrix, 60);

// Bikin responsif: Reset ukuran layar misal HP di-rotate/dimiringin
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ==========================================
// 2. BAGIAN TIMER OTOMATIS PUTAR PROFIL (30 DETIK)
// ==========================================
const profileCard = document.getElementById('profileCard');

// Jalankan fungsi putar otomatis setiap 30 detik (30000 milidetik)
setInterval(() => {
    if (profileCard) {
        profileCard.classList.toggle('flipped');
    }
}, 13000);

/* ==========================================
   FUNGSI PEMANGGIL GELEMBUNG SAAT DIKLIK
   ========================================== */
document.addEventListener('click', function(e) {
    // 1. Bikin elemen div baru
    const bubble = document.createElement('div');
    
    // 2. Kasih class dari CSS tadi
    bubble.classList.add('click-bubble');
    
    // 3. Pasang posisinya persis di titik klik jari/mouse
    bubble.style.left = e.clientX + 'px';
    bubble.style.top = e.clientY + 'px';
    
    // 4. Masukin gelembungnya ke dalam layar
    document.body.appendChild(bubble);
    
    // 5. Bersihkan/hapus gelembung dari sistem setelah 600ms (biar web ga ngelag)
    setTimeout(() => {
        bubble.remove();
    }, 600);
});
