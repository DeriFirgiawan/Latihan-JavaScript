var s = '';

for(var i = 10; i > 0;i--){
	for(var bintang = 0; bintang < i;bintang++){
		s += '*';
	}
	s += '\n';
}

console.log(s);