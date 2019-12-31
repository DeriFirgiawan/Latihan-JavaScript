function tambah(a,b) {
	a = parseInt(prompt('Masukan Angka pertama: '));
	b = parseInt(prompt('Masukan Angka kedua: '));
	return a + b;
}

function kurang(a,b) {
	a = parseInt(prompt('Masukan Angka pertama: '));
	b = parseInt(prompt('Masukan Angka kedua: '));
	return a - b;
}

function kali(a,b) {
	a = parseInt(prompt('Masukan Angka pertama: '));
	b = parseInt(prompt('Masukan Angka kedua: '));
	return a * b;
}

function bagi(a,b) {
	a = parseInt(prompt('Masukan Angka pertama: '));
	b = parseInt(prompt('Masukan Angka kedua: '));
	return a / b;
}

var hasil = '';
var lagi = true;

while( lagi ){
	var pilih = prompt('Masukan Pilihan anda:\nTambah,Kurang,Bagi,Kali');
	if( pilih == 'tambah' ){
		hasil = tambah();
	} else if( pilih == 'kurang' ){
		hasil = kurang();
	} else if( pilih == 'kali' ){
		hasil = kali();
	} else if( pilih == 'bagi' ){
		hasil = bagi();
	} else {
		alert('Anda memasukan pilihan yang salah');
	}
	
	alert('Hasilnya adalah ' + hasil);
	lagi = confirm('Masuk Kalkulator lagi??');
}