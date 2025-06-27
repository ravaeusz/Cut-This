import express from 'express';
import router from './routes';
import cors from 'cors';


const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(router)



app.listen(3001, () => {
    console.log("Servidor iniciado!");
    console.log("Clique + Shift em http://localhost:3001");
    
})