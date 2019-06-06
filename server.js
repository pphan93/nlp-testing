'use strict';

require('dotenv').config()
const APIAI_TOKEN = process.env.APIAI_TOKEN;
const APIAI_SESSION_ID = process.env.APIAI_SESSION_ID;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const apiai = require('apiai')(APIAI_TOKEN);

// Web UI
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post("/submit", function (req, res) {
  var comment = req.body.comment
  console.log(comment)

  let apiaiReq = apiai.textRequest(comment, {
    sessionId: APIAI_SESSION_ID
  });

  apiaiReq.on('response', (response) => {
    let aiText = response.result;
    console.log(aiText);
    res.json(response.result.parameters)
  });

  apiaiReq.on('error', (error) => {
    console.log(error);
  });

  apiaiReq.end();
})


