let totalHarga = 0;

document.querySelectorAll('.tambah-ke-keranjang').forEach(button => {
    button.addEventListener('click', function() {
        const itemProduk = this.parentElement;
        const namaProduk = itemProduk.getAttribute('data-nama');
        const hargaProduk = parseInt(itemProduk.getAttribute('data-harga'));

        totalHarga += hargaProduk;
        document.getElementById('total-harga').innerText = `Rp ${totalHarga.toLocaleString()}`;

        alert(`${namaProduk} telah ditambahkan ke keranjang!`);
    });
});

// Rating
document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', function(event) {
        if (event.target.classList.contains('star')) {
            const selectedValue = event.target.getAttribute('data-value');
            const stars = this.querySelectorAll('.star');

            // Set rating
            this.setAttribute('data-rating', selectedValue);

            // Update star colors
            stars.forEach(star => {
                star.classList.remove('selected');
                if (star.getAttribute('data-value') <= selectedValue) {
                    star.classList.add('selected');
                }
            });

            alert(`Rating untuk ${this.parentElement.querySelector('h3').innerText} adalah ${selectedValue} bintang!`);
        }
    });
});

document.querySelectorAll('.tambah-ke-keranjang').forEach(button => {
    button.addEventListener('click', function() {
        const itemProduk = this.parentElement;
        const namaProduk = itemProduk.getAttribute('data-nama');
        const hargaProduk = parseInt(itemProduk.getAttribute('data-harga'));

        totalHarga += hargaProduk;
        document.getElementById('total-harga').innerText = `Rp ${totalHarga.toLocaleString()}`;

        alert(`${namaProduk} telah ditambahkan ke keranjang!`);
    });
});