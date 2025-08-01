import express from 'express';
import "reflect-metadata";
import config from './config/server';
import { AppDataSource } from './config/db';
import userRoutes from './routes/user';
import { User } from './models/user';  

const app = express();
const port = config.port;

app.use(express.json());
app.use("/user", userRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected');

    
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find();
    console.log('Users:', users);

    app.get('/', (req, res) => {
      res.send("Hello, it's digital livestock");
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
  });
