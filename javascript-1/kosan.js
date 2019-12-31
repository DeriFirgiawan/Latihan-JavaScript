// Membuat Array yang bernilai kosong
var penghuni = [];

// Membuat function dengan dua parameter yang di simpan di variabel
var tambahPenghuni = function(namaPenghuni, penghuni){

	// melakukan pengkondisian untuk mengisi kamar yang kosong

	if( penghuni.length == 0 ){
		penghuni.push(namaPenghuni);
		// mengembalikan nilai
		return penghuni;
	} else {
		for(var i = 0; i < penghuni.length; i++){

			if( penghuni[i] == undefined ){

				penghuni[i] = namaPenghuni;

				return penghuni;
			}

			else if( penghuni[i] == namaPenghuni ){
				console.log('Nama ' + namaPenghuni + ' Sudah ada');

				return penghuni;
			}

			else if( i == penghuni.length - 1 ){

				penghuni.push(namaPenghuni);

				return penghuni;
			}
		}
	}
}

// Membuat function hapus jika penghuni telah pindah

var hapusPenghuni = function(namaPenghuni, penghuni) {
	if( penghuni.length == 0 ){
		console.log('Kosan masih kosong Boss');
	} else {
		for( var i = 0; i < penghuni.length; i++){
			if(penghuni[i] == namaPenghuni){
				penghuni[i] = undefined;
			} else if( i == penghuni.length - 1 ){
				console.log(namaPenghuni + ' tidak ada');
			}
		}
	}

	return penghuni;
}