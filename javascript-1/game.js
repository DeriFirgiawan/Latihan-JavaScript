var cobaLagi = true;

while(cobaLagi){
	alert('Selamat Datang');
	var soal = prompt('Apakah Saya Ganteng. Ya atau Tidak');
	if(soal === 'ya'){
		alert('Terima Kasih Terimakasih');
	} else {
		alert('Kamau Goblok');
	}

	cobaLagi = confirm('Coba Lagi');
}