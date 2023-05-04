import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';

//import connection from './configs/connectDB';
require(`dotenv`).config();

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port);

//Ho tro gui data len server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);

//init api route
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})