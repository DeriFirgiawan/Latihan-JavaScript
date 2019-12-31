// Manipulasi Array

// 1. Menambah isi Array

// var arr = [];

// arr[0] = "Deri";
// arr[1] = "Firgiawan"
// console.log(arr[1]);

// 2.Menghapus isi Array
// dengan cara manual

// var arr = ["Deri", " Firgiawan", "Ei"];
// arr[1] = undefined;

// console.log(arr);

// 3.Menampilkan Isi Array
// var arr = ["Deri", "Firgiawan", "Ei", 'Firgi'];

// for( var i = 0; i < arr.length; i++){
// 	console.log('Mahasiswa ke-' + (i+1) + arr[i]);
// }

// 4. Method pada Array
// 1.join
 // var arr = ['Deri', 'Firgiawan', 'Ei', 'otong', 'ucup'];
// console.log(arr.join(' '));

// 2.Push
// arr.push('Firgi');

// 3. Pop
// arr.pop();
// arr.pop();

// 4. unshift & shift
// arr.unshift('otong');
// arr.shift();

// 5.Splice
// splice(indexAwal,mauDihapusBerapa,elemen baru)
// arr.splice(1,2,'otong');

// 6.slice
// slice(awal,akhir)
// var arr2 = arr.slice(1,3);
// arr.splice(0,1);
// console.log(arr.join(' '));

// 4. Foreach

// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e){
// 	console.log(e);
// });

// var nama = ['Deri', 'Firgiawan', 'Ei'];

// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + ((i+1) + 'adalah: ' + e));
// });

// 5. Map

var angka = [1,2,3,4,5,6,8,7];

// angka.map(function(e){
// 	return e;
// })

// 6. Sort
// angka.sort(function(a,b){
// 	return a - b;
// });
// console.log(angka.join(' - '));

var angka2 = angka.find(function(x){
	return x > 5;
});

console.log(angka2);