const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
// app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello developer!');
});

app.listen(port, () => {
    console.log(`Server running on the port:${port}`);
});
