const express = require('express');
import type { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // async function main() {
  
// // };

// // main()
// //   .catch(e => console.error(e))
// //   .finally(() => prisma.$disconnect());

// allow all origins (development only)
app.use(cors())

app.use(express.json())

app.use('/pendaftaran', require('./routes/pendaftaran.routes'));
app.use('/dokter', require('./routes/dokter.routes'));
app.use('/jenis-pengobatan', require('./routes/jenis_pengobatan.routes'));
app.use('/metode-pembayaran', require('./routes/metode_pembayaran.routes'));
app.use('/jadwal-pengobatan', require('./routes/jadwal_pengobatan.route'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// module.exports = app;

export default app;

