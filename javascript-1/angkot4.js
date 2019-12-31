var jumlahAngkot = 10;
var angkotberoperasi = 6;

for(var noAngkot = 1;noAngkot <= jumlahAngkot; noAngkot++){
	if(noAngkot <= angkotberoperasi && noAngkot !== 5){
		console.log('Angkot No.' + noAngkot + '' + ' beroperasi dengan baik');
	} else if(noAngkot === 8 || noAngkot === jumlahAngkot || noAngkot === 5){
		console.log('Angkot No.' + noAngkot + '' + ' sedang lembur');
	} else {
		console.log('Angkot No.' + noAngkot + '' + ' sedang tidak beroperasi');
	}
}