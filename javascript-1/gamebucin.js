/*membuat program sederhana dengan javascript
membuat program game untuk bucin
Test seberapa cocok kah anda dengan dirinya*/

// menangkap pilihan player
alert('Selamat Datang');

var p = prompt('Silakan Masukan nama anda:');

// menangkap pilihan komputer
// membangkitkan bilangan random
var comp = Math.random();

if( comp < 0.35 ){
	comp = 'aurel';
} else if( comp >= 0.5 && comp < 0.67){
	comp = 'syahrini';
} else {
	comp = 'ashanty';
}

// menentukan rules
var hasil = '';
if( p == comp ){
	hasil = ( comp = 'aurel') ? 'COCOK SEKALI':'TIDAK COCOK'
} else if(){
	hasil = ( comp = 'syahrini') ? 'COCOK SEKALI':'TIDAK COCOK'
}
// tampilkan hasinya
alert('Hallo ' + p + ' kamu dan ' + comp + '' + hasil);