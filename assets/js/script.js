//variavel global//
let number1 = document.getElementById('input1');
let number2 = document.getElementById('input2');
let res1 = document.getElementById('res');
let operacao = document.querySelector('span');


function minha(){ 
	let y = Number(number1.value);
	let x = Number(number2.value);
	let b = y*x;
	let c = b.toFixed(2);
	let f = parseFloat(c); 
	res1.innerHTML = `${y} x ${x} = ${f}`;
	operacao.innerHTML = `X`; 

}

function minha1(){

	let y = Number(number1.value);
	let x = Number(number2.value);
	let b = y/x;
	let c = b.toFixed(2);
	let f = parseFloat(c);
	res1.innerHTML = `${y} / ${x} = ${f}`;
	operacao.innerHTML = `/`; 

}

function minha2(){

	let y = Number(number1.value);
	let x = Number(number2.value);
	let b = y+x;
	let c = b.toFixed(2);
	let f = parseFloat(c);
	res1.innerHTML = `${y} + ${x} = ${f}`;
	operacao.innerHTML = `+`; 

}

function minha3(){

	let y = Number(number1.value);
	let x = Number(number2.value);
	let b = y-x;
	let c = b.toFixed(2);
	let f = parseFloat(c);
	res1.innerHTML = `${y} - ${x} = ${f}`;
	operacao.innerHTML = `-`;
}