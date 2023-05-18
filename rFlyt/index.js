const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const responseDiv = document.querySelector('#response');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const text = userInput.value;
	const response = await sendToChatGPT(text);
	responseDiv.innerHTML = response;
});

async function sendToChatGPT(text) {
	const apiKey = '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';
	const url = 'https://api.openai.com/v1/engine/chat/gpt3';

	const body = {
		prompt: text,
		max_tokens: 50,
		temperature: 0.5,
	};

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`,
		},
		body: JSON.stringify(body),
	});

	const data = await response.json();

	return data.choices[0].text;
}







