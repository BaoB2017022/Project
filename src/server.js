import express from 'express';
import configViewEngine from './configs/viewEngine';
require(`dotenv`).config();

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port);

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