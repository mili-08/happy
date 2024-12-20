const express  = require('express');

const app = express();

const PORT = 5000;

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/views/index.html')
});

app.listen(PORT,()=> {
    console.log(`[Server] running on port ${PORT}`)
});

