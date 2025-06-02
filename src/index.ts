const express = require('express');
import type { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // async function main() {
  
// // };

// // main()
// //   .catch(e => console.error(e))
// //   .finally(() => prisma.$disconnect());

app.use(express.json())

app.use('/pendaftaran', require('./routes/pendaftaran.routes'));
app.use('/dokter', require('./routes/dokter.routes'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
