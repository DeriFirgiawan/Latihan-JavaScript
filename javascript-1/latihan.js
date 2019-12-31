// membuat program sederhana dengan JavaScript
// membuat katalog buku yang tersedia

var jumlahBuku = 100;

alert('Total Buku yang tersedia ' + '' + jumlahBuku);
var pertanyaan = prompt('Apakah anda ingin meminjam buku??');

if(pertanyaan === 'iya'){
	var pertanyaan2 = prompt('Berapa buku yang akan anda pinjam??');
	if(jumlahBuku -= pertanyaan2){
		alert('Total buku saat ini adalah ' + jumlahBuku);
	} else {
		alert('Anda tidak serius');
	}
} else if(pertanyaan === 'tidak'){
	var pertanyaan3 = prompt('Apakah anda ingin mengembalikan buku??');
	if(pertanyaan3 === 'iya'){
		alert('Terimakasih');
	} else {
		alert('Pergi kamu goblok!!');
	}
}
