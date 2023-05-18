const express = require('express');
const app = express();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: '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' });

app.use(express.json());

app.post('/api/chat', async (req, res) => {
	const { text } = req.body;

	try {
		const response = await openai.complete({
			engine: 'davinci',
			prompt: text,
			maxTokens: 50,
			temperature: 0.5,
		});

		res.json({ response: response.choices[0].text });
	} catch (error) {
		res.status(500).json({ error: 'An error occurred while processing the request' });
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
