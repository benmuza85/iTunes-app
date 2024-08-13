import express, { json } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import apiRouter from './routes/api.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use Helmet to secure the app by setting various HTTP headers
app.use(helmet());

// Use express.json() to parse JSON request bodies
app.use(json());


// Use the API router for handling requests to /api
app.use('/api', apiRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'client', 'build')))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'), (err)=>{
            if(err){
                res.status(500).send(err)
            }
        })
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
