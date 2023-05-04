import express from 'express';
import configViewEngine from './configs/viewEngine';

const app = express();
const port = 3000;

configViewEngine(app)

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/about', (req, res) => {
    res.send("Nguyen Quoc Bao");
})

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})