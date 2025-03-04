document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi</i<';
       
        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement ('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalimage').innerHTML='';
        document.querySelector('.modalimage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6285694556026';
        let pesan = `https://wa.me/${nohp}?text=Hallo%20Bang,%20saya%20mau%20pesan%20produk%20ini%20${encodeURIComponent(gambar)}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});