// ===========================
// 1. OVERLAY
// ===========================
const overlay = document.createElement("div");

// ===========================
// 2. TITLE
// ===========================
const title = document.createElement("div");
title.textContent = "Tap anywhere to enter Full Screen Mode";

// ===========================
// 3. STATUS
// ===========================
const status = document.createElement("div");

// ===========================
// 4. STYLE
// ===========================
overlay.style.display = "flex";
overlay.style.flexDirection = "column";
overlay.style.alignItems = "center";
overlay.style.position = "fixed";
overlay.style.bottom = "30px";
overlay.style.left = "50%";
overlay.style.transform = "translateX(-50%)";
overlay.style.gap = "8px";

// ===========================
// 5. SUSUN STRUKTUR HTML
// ===========================
overlay.appendChild(title);
overlay.appendChild(status);

document.body.appendChild(overlay);

// ===========================
// 6. EVENT TAP
// ===========================
overlay.addEventListener("click", function(){

    // Ubah status
     status.textContent = "Status : Entering Full Screen...";

    // 2. Minta browser masuk fullscreen
    document.documentElement.requestFullscreen();
    // Masuk fullscreen

});

// ===========================
// 7. FULLSCREEN BERHASIL
// ===========================



// ===========================
// 8. KELUAR FULLSCREEN
// ===========================
document.addEventListener("fullscreenchange", function() {

});

// ===========================
// 9. FUNGSI TAMBAHAN
// ===========================
