import express from 'express';
import "reflect-metadata";
import config from './config/server';
import { AppDataSource } from './config/db';
import userRoutes from './routes/user';
import cowsRoutes from './routes/cows';
import  categoriesRoutes from './routes/category';
import cartRoutes from './routes/cart';
import orderRoutes from './routes/orders';


const app = express();
const port = config.port;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/api", cowsRoutes);
app.use("/api",categoriesRoutes);
app.use("/api",cartRoutes);
app.use("/api",orderRoutes);


app.get('/', (req, res) => {
  res.send("Hello, it's digital livestock");
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected');
   
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });
