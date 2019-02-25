function change(){
	document.getElementById("para1").style.color = 'blue';
	document.getElementById("para1").style.fontFamily = 'Impact';
	document.getElementById("para1").style.backgroundColor = 'yellow';
}function changeBack(){
	document.getElementById("para1").style.color = 'black';
	document.getElementById("para1").style.fontFamily = 'times new roman';
	document.getElementById("para1").style.backgroundColor = 'white';
}

function shuffle(array) {
	let temporaryValue;
	let randomIndex;

	// While there remain elements to shuffle...
	for (let currentIndex = array.length - 1; currentIndex >= 0; currentIndex--) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

document.addEventListener("keypress", function (event) {
		if (event.key !== "r"){
			return
		}

		let paraElement = document.getElementById("test");
		let paraArray = paraElement.innerText.split(" ");
		let randParaArray = shuffle(paraArray);
		paraElement.innerText = randParaArray.join(" ");
	});