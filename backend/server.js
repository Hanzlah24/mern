import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import languages from './routes/languagesRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import { connectDB } from './config/db.js';
import users from './routes/userRoutes.js';
import projects from './routes/projectsRoutes.js';
dotenv.config()

connectDB(process.env.MONGO_URI);

const app =express();
app.use(cors());
const port =process.env.PORT || 5000
//decalring data for post req
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//declaring routes
app.use('/api/languages',languages)
app.use('/api/users',users)
app.use('/api/projects',projects)
//error middleware Handles all errors
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

