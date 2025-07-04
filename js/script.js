window.addEventListener('keydown', player);
function player(e) {
	let keyCode;
	if (e.type === 'click') {
		keyCode = e.currentTarget.getAttribute('data-key');
	} else {
		keyCode = e.keyCode;
	}

	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
	if (!audio) return;

	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	console.log(e.propertyName);
	this.classList.remove('playing');
}

let keys = document.querySelectorAll(".box.key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
console.log(keys);

keys.forEach(key => key.addEventListener('click', player));