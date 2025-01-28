import  express  from "express";
import mustache from 'mustache-express';
import {router} from '../src/routers/router';
import path  from "path";
import fileUpload from "express-fileupload"

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.set('view engine', 'mustache');
app.engine('mustache', mustache());
app.set('views', path.join(__dirname, 'views'));
app.use(fileUpload());
app.use(router);

const port = process.env.PORT ?? 5000;

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});