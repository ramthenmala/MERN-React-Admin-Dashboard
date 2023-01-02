import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
// Routes
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'
import connectMongoDB from './utils/connect.js';
import User from './models/User.js';

import { dataUser } from './data/index.js'
import mongoose from 'mongoose';

// Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// Routes
app.use('/client', clientRoutes); // Products, Greography, Transactions, Customers
app.use('/general', generalRoutes); // getting the suer, Dashboard
app.use('/management', managementRoutes); // About, Performance
app.use('/sales', salesRoutes); // Overview, Daily, Weekly, Monthly

connectMongoDB(PORT);