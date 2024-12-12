import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnect } from './config/mongodb.js'; // Ajoutez ".js" à l'import
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';


// Configuration de l'application
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connexion à la base de données
dbConnect();

// Connexion à la cloudinary
connectCloudinary()



// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.use('/api/admin',adminRouter)
app.use('/api/doctors', doctorRoutes);

// Endpoints de l'application
app.get('/', (req, res) => {
    res.send('API WORKING');
});

// Lancer le serveur
app.listen(port, () => console.log(`Server started on port ${port}`));
