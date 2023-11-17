const express = require('express');
const app = express();

// Hier wird der public Ordner als Ort für statische Dateien definiert
app.use(express.static('public'));

let port = 3000;

/* ADD */
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Invalid DataType in Request');
        res.send('<h1>Invalid DataType</h1>');
    } else {
        let result = num1 + num2;
        res.send({ result });
    }
});

/* SUB */
app.get('/sub/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Invalid DataType in Request');
        res.send('<h1>Invalid DataType</h1>');
    } else {
        let result = num1 - num2;
        res.send({ result });
    }
});

/*Service*/
app.listen(port, () => {
    console.log(`Monolater service started on port ${port}`);
});
