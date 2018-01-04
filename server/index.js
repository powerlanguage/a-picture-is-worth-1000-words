const express = require('express');
// const axios = require('axios');

const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));

// load route
// return parsed data to client
// client renders passed back data

app.use(express.static(__dirname + '/../client/dist'));

app.get('/load', (req, res) => {
  res.send(['💦', '🔌', '🔥', '👕', '🎁', '🍾', '🇲🇽', '🎬', '🎟', '🏈',]);
})


