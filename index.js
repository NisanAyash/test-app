const express = require('express');

const app = express();

app.get('/health', (req,res) => {
    res.send('healthy')
})

app.listen(4005, () => console.log('listening on http://localhost:4005'));