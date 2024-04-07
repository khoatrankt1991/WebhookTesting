const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/healthcheck', (req, res) => {
    console.log('HealthCheck Webhook:');
    res.status(200).send('OK');
});
app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', JSON.stringify(req.body, 0, 4));
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});