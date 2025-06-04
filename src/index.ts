import express from 'express'
import type { Request, Response } from 'express';
import cors from 'cors';
import pendaftaranRoutes from './routes/pendaftaran.routes.ts';
import dokterRoutes from './routes/dokter.routes.ts';
import jenisPengobatanRoutes from './routes/jenis_pengobatan.routes.ts';
import metodePembayaranRoutes from './routes/metode_pembayaran.routes.ts';
import jadwalPengobatanRoutes from './routes/jadwal_pengobatan.route.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

app.use('/pendaftaran', pendaftaranRoutes);
app.use('/dokter', dokterRoutes);
app.use('/jenis-pengobatan', jenisPengobatanRoutes);
app.use('/metode-pembayaran', metodePembayaranRoutes);
app.use('/jadwal-pengobatan', jadwalPengobatanRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

