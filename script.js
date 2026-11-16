// 1. Pilih tombol berdasarkan ID 'hihubutton' yang ada di HTML
const tombolSapa = document.getElementById('hihubutton');

// 2. Tambahkan 'event listener' untuk aksi 'click'
if (tombolSapa) {
    tombolSapa.addEventListener('click', function() {
        // 3. Jalankan kode ini ketika tombol di-klik
        alert('Halo! Terima kasih sudah berkunjung!');
    });
}
