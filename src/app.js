import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//imagenes Estaticas
app.use('/uploads', express.static('uploads'));

app.get('/api/healt', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API de notas activa' });
});

//midlewere de manejo d eerrores 
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ error: 'Error interno en el servidor' });

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);

})