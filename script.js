document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan elemen tombol hamburger dan daftar link navigasi
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    // Pastikan elemen-elemen ditemukan sebelum menambahkan event listener
    if (hamburgerMenu && navLinks) {
        // Tambahkan event listener untuk klik pada tombol hamburger
        hamburgerMenu.addEventListener('click', function() {
            // Toggle (tambah/hapus) kelas 'active' pada daftar link navigasi
            navLinks.classList.toggle('active');

            // Opsional: Untuk mengubah ikon hamburger menjadi 'x'
            const icon = hamburgerMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ikon 'X'
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Kembali ke ikon Hamburger
            }
        });

        // Opsional: Tutup menu ketika link navigasi diklik (untuk UX mobile)
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.querySelector('i').classList.remove('fa-times');
                    hamburgerMenu.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    } else {
        console.error("Elemen navigasi tidak ditemukan. Pastikan ID 'hamburger-menu' dan 'nav-links' sudah benar.");
    }
});