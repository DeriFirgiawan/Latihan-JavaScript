// belajar dengan Object JavaScript
// 1.Object Literal
// var mhs = {
// 	nama : "Deri Firgiawan",
// 	umur : 16,
// 	ips : [3.00, 2.50, 3.26],
// 	alamat : {
// 		jalan : "Jl.Abc",
// 		kota : "Bandung",
// 		provinsi : "Jawa Barat",
// 	}
// };
// Membuat Biodata dengan object Javascript
// object literal
// var biodata = {
// 	nama	: "Deri Firgiawan",
// 	umur	: 16,
// 	ttl		: "25 April 2003",
// 	sekolah	: "SMK MERDEKA BANDUNG",
// 	hobi	: "Programming",
// 	alamat	: {
// 		jalan		: "Jl.Bojong Kaler",
// 		kota		: "Bandung",
// 		provinsi	: "Jawa Barat",
// 	}
// };

// console.log('nama: ' + biodata.nama);
// console.log('umur: ' + biodata.umur);
// console.log('tanggal-lahir: ' + biodata.ttl);
// console.log('sekolah: ' + biodata.sekolah);
// console.log('hobi: ' + biodata.hobi);
// console.log('alamat: ' + biodata.alamat.jalan);
// console.log('kota: ' + biodata.alamat.kota);
// console.log('provinsi: ' + biodata.alamat.provinsi);
// ****************************************************************************

// 2.Function Deklarasi

// function buatObjectMahasiswa(nama, nrp, email, jurusan){
// 	var mhs = {};
// 	mhs.nama = nama;
// 	mhs.nrp = nrp;
// 	mhs.email = email;
// 	mhs.jurusan = jurusan;

// 	return mhs;
// }

// var mhs3 = buatObjectMahasiswa('Deri Firgiawan','029837472478','derifirgiawan025@gmail.com', 'Teknik Informatika');

// // 3.Consructor
// function Mahasiswa(nama, nrp, email, jurusan){
// 	this.nama = nama;
// 	this.nrp = nrp;
// 	this.email = email;
// 	this.jurusan = jurusan;
// }

// var mhs4 = new Mahasiswa('Deri', '032328402843', 'derifirgiawan025@gmail.com', 'teknik Informatika');

// this