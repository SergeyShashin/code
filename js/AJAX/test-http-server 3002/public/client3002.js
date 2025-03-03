let btnSendJsontoServer3001 = document.getElementById('btnSendJsontoServer3001');

btnSendJsontoServer3001.addEventListener('click', function() {
	let promise = fetch('http://localhost:3001/reciveJsonFromServer3002/', {
		method: 'post',
		body: JSON.stringify([1, 2, 3, 4, 5, 888]),
		headers: {
			'Content-Type': 'application/json',
		},
	});
});