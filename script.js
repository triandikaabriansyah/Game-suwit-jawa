function getPilihanComputer(){
	const comp = Math.random() * 9;
	if(comp < 3) return 'gajah';
	if(comp >= 3 && comp <= 6) return 'orang';
	return 'semut';
}
// menentukan rules
function getHasil(comp, player){
	if(player == comp) return 'SERI!';
	if(player == 'gajah') return(comp == 'orang')? 'MENANG!' : 'KALAH!';
	if(player == 'orang') return(comp == 'gajah')? 'KALAH!' : 'MENANG!';
	if(player == 'semut') return(comp == 'gajah')? 'MENANG!' : 'KALAH!';
}

function putar(){
	const imgKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval;
			return;
		}
		imgKomputer.setAttribute('src', 'img/' + gambar[i++]+ '.png');
		if(i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		const skor = document.querySelector('.skor');

		putar();

		setTimeout(function(){
		const imgKomputer = document.querySelector('.img-komputer');
		imgKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		}, 1000);
	});
});

