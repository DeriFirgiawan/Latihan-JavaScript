// const close = document.querySelectorAll('.close');

// const card = document.querySelectorAll('.card');

// close.addEventListener('click', function(){
// 	card.style.display = 'none';
// });

const close = document.querySelectorAll('.close');
// for( let i = 0; i < close.length; i++ ){
// 	close[i].addEventListener('click', function(e){
// 		// close[i].parentElement.style.display = 'none';

// 		e.target.parentElement.style.display = 'none';

// 	});
// }

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});


// const nama = document.querySelector('.nama');
// nama.nextElementSibling.style.backgroundColor = 'red';



// DOM Traversal Method
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// previousSibling
// previousElementSibling
