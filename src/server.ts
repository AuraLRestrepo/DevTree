// ESM ecmascript module
import express from 'express';
import router from './router';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
// commonJS
// const express = require('express');

dotenv.config();

// instancia del servidor
const app = express();
connectDB();

// Leer datos de formularios
app.use(express.json());

app.use('/', router);

export default app;