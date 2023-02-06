import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from "mongoose";
// Routes
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

import connectMongoDB from './utils/connect.js';
import User from './models/User.js';

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

app.get('/healthcheck', (req, res) => {
    res.json({msg: "all ok"})
})
// connectMongoDB(PORT);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));