var jumlahAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
	console.log('Angkot' + noAngkot + '' + ' Beroperasi dengan baik');
noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++){
	console.log('Angkot' + noAngkot + '' + ' Tidak Beroperasi');
}

