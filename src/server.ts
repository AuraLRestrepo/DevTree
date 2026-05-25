// ESM ecmascript module
import express from 'express';
import router from './router';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import { corsOptions } from './config/cors';
// commonJS
// const express = require('express');

dotenv.config();

// instancia del servidor
const app = express();
connectDB();

// CORS
app.use(cors(corsOptions));     

// Leer datos de formularios
app.use(express.json());

app.use('/', router);

export default app;