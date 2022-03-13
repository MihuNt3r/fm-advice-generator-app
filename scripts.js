function onDiceClick() {
	fetch('https://api.adviceslip.com/advice')
		.then(response => response.json())
		.then(data => {
			document.getElementById("adviceId").innerHTML = `Advice #${data.slip.id}`;
			document.getElementById("adviceText").innerHTML = `"${data.slip.advice}"`;
		})
		.catch(() => {
			document.getElementById("adviceId").innerHTML = `Advice #404`;
			document.getElementById("adviceText").innerHTML = `"It's good time to check your internet connection"`;
		});
}