# Deno
Pada repositori ini nantinya akan membahas tentang bagaimana cara menggunakan deno framework, dimulai dari installasi, praktek dasar menggunakan beberapa modules atau library yang disediakan oleh deno framework, dan beberapa praktek terbaik yang bisa di implementasi ke dalam deno framework.

Deno framework sendiri dibangun di atas teknologi V8, Rust dan Tokio.

### Fitur Penting :  
Yang membedakan dengan beberapa framework yang lain, didalam Deno framework mempunyai fitur penting seperti,
- Secara default Deno Lebih aman. Karena Tidak ada File, Network, atau environment access. (kecuali explicitly diaktifkan).
- Mendukung bahasa Typescript.
- Proses pengiriman single eksekusi (single executable).
- Memiliki utilitas bawaan seperti dependensi inspektor (*deno info*) dan kode format (*deno fmt*).
- Skrip bisa dibundle kedalam satu file javascript.
- Telah dilakukan proses audit / review terhadap standard modules dan bergaransi berjalan dengan Deno framework.  

### Menjalankan Deno Framework :   
Untuk menjalankan deno framework sebenarnya bisa menggunakan beberapa cara tapi yang sederhana adalah dengan mengetikan perintah berikut  

>  `deno run --allow-net index.js` atau `deno run index.js`  

file *index.js* bisa diubah dengan file utama yang akan kamu jalankan.