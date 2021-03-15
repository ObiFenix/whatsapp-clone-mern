import express from 'express';

// app config
const app = express();
const port = process.env.PORT || 9000;

// Middleware

// Routes
app.get('/', (req, res) => {
  const message = 'Welcome to Whatsapp reinvented!';
  res.status(200).send(message);
})

// Server listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));