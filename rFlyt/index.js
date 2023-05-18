const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const responseDiv = document.querySelector('#response');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const text = userInput.value;
	const response = await sendToServer(text);
	responseDiv.innerHTML = response;
});

async function sendToServer(text) {
	const url = '/api/chat';

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ text }),
	});

	const data = await response.json();

	return data.response;
}
