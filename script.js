document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen tombol hamburger dan daftar link navigasi
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    // Pastikan kedua elemen ada sebelum menambahkan event listener
    if (hamburgerMenu && navLinks) {
        // Event listener untuk mengaktifkan/menonaktifkan menu navigasi
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Mengaktifkan/menonaktifkan kelas 'active'
            
            // Mengubah ikon hamburger menjadi 'X' dan sebaliknya
            const icon = hamburgerMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Event listener untuk setiap link navigasi
        // Ini akan menutup menu mobile secara otomatis saat salah satu link diklik
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                // Periksa apakah menu sedang aktif (terbuka)
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active'); // Tutup menu
                    
                    // Kembalikan ikon menjadi hamburger
                    const icon = hamburgerMenu.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    } else {
        // Pesan error di konsol browser jika elemen tidak ditemukan
        console.error("Kesalahan: Elemen navigasi atau tombol hamburger tidak ditemukan. Pastikan ID 'hamburger-menu' dan 'nav-links' ada di HTML Anda.");
    }
});

// Tambahan (Opsional): Scroll ke atas saat berpindah halaman dengan link internal
// Ini bisa membuat pengalaman pengguna lebih mulus, terutama jika halaman panjang
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) { // Hanya berlaku untuk link yang ke ID
        e.preventDefault(); // Mencegah perilaku default link
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});