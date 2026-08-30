import express, { type Request, type Response } from 'express';
import pg, { Client } from 'pg';
import pool, { verifyConnection, getAftershock }  from './pool.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample Route
app.get('/', async (req: Request, res: Response) => {
    const message = await getAftershock();
    res.json({ message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(verifyConnection());
  console.log(getAftershock());
});
