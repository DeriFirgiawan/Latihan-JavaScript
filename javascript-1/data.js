// Membuat data Mahasiswa dengan Array JavaScript

// 1. Membuat Array dengan di isikan nama mahasiswa

var data = ['Ucup', 'Otong', 'Halim', 'Dino', 'Supri', 'Janur', 'Bilah', 'Kodir'];

data.splice(1,1);
data.pop();
data.push('Fiki');

for( var i = 0; i < data.length; i++) {
	console.log('Mahasiswa no.' + (i+1) + ' ' + data[i]);
}