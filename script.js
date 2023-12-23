function submitForm(event) {
    event.preventDefault();

    // Validasi formulir sebelum pengiriman
    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;
    var alamat = document.getElementById('alamat').value;

    if (nama.trim() === '' || kelas.trim() === '' || alamat.trim() === '') {
        alert('Mohon lengkapi semua field formulir.');
    } else {
        // Kirim data ke server atau lakukan tindakan lain sesuai kebutuhan
        alert('Terima kasih atas pendaftarannya, ' + nama + '!');
        // Di sini Anda dapat menambahkan logika untuk mengirimkan data ke server atau melakukan tindakan lainnya.
    }
}