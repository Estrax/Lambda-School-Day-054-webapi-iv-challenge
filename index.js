// code away!
const express = require('express');
const initMiddleware = require('./src/serverMiddleware');
const router = require('./src/router');

const app = express();
initMiddleware(app);
app.use('/api', router);

const PORT = process.env.PORT || 6500;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`App running on port ${PORT}`);
});