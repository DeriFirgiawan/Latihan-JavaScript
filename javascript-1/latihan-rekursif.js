function pengulangan(p){
	if( p === 0 )return;
	console.log(p);
	pengulangan(p-1);
}

pengulangan(100);