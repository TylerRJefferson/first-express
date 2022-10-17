import express from "express";
//conventionally we call our API (express app) 'app' with Express
const app = express();

//all request are denied unless specified, give examples of allowed requests
//then tell it what to do when somebody requests one that is allowed

app.get('/test', (request, response) => {
  response.send({ message: "😎😎😎 It's all good, my guy! 😎😎😎" })
});

app.get('/', (request, response) => response.send({ message: 'Welcome to our first API' }));

app.get('/error', (request, response) => {
  response
    .status(500)
    .send({ message: 'Something went wrong', success: false })
});


//let requests come in through port 3030, checks all requests continuously forever unless told to stop
app.listen(3030, () => console.log('Listening on http://localhost:3030 ...'));

