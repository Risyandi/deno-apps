# Deno
Pada repositori ini nantinya akan membahas tentang bagaimana cara menggunakan deno, dimulai dari installasi, praktek dasar menggunakan beberapa modules atau library yang disediakan oleh deno, dan beberapa praktek terbaik yang bisa di implementasi ke dalam deno .

Deno sendiri dibangun di atas teknologi V8, Rust dan Tokio.

### Fitur Penting :  
Yang membedakan dengan beberapa runtime javascript yang lain, didalam Deno  mempunyai fitur penting seperti,
- Secara default Deno Lebih aman. Karena Tidak ada File, Network, atau environment access. (kecuali explicitly diaktifkan).
- Mendukung bahasa Typescript.
- Proses pengiriman single eksekusi (single executable).
- Memiliki utilitas bawaan seperti dependensi inspektor (*deno info*) dan kode format (*deno fmt*).
- Skrip bisa dibundle kedalam satu file javascript.
- Telah dilakukan proses audit / review terhadap standard modules dan bergaransi berjalan dengan Deno .  

### Instalasi Deno :
Deno bekerja di beberapa sistem operasi seperti macOS, Linux dan windows. Deno bisa di unduh di [Deno Github](https://github.com/denoland/deno_install). Untuk menginstalasi deno di komputer kamu bisa menggunakan tools dan memasukan perintah berikut ini :  
- Menggunakan Shell (macOs dan Linux)   
    > `curl -fsSL https://deno.land/x/install/install.sh | sh`  
- Menggunakan Homebrew (macOs)  
    > `brew install deno`  
- Menggunakan Chocolatey (Windows)  
    > `choco install deno`  

### Tes Instalasi Deno :
Jika kamu sudah melakukan proses instalasi dan ingin mengecek apakah deno sudah terinstal dengan baik yang kamu bisa lakukan adalah mengetes nya dengan memasukan perintah berikut: 
> `deno --version`  

Dan jika ingin memperbarui versi deno ke versi terbaru kamu bisa memasukan perintah berikut : 
> `deno upgrade` 

### Menjalankan Deno :   
Untuk menjalankan deno sebenarnya bisa menggunakan beberapa cara tapi yang sederhana adalah dengan mengetikan perintah berikut  

>  `deno run --allow-net index.js` atau `deno run index.js`  

Namun jika didalam baris kode kamu menggunakan sebuah library (pustaka), kamu bisa menambahkan perintah `--allow-read` berikut  

>  `deno run --allow-read --allow-net index.js` 

file *index.js* bisa diubah dengan file utama yang akan kamu jalankan.