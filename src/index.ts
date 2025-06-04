import express from 'express'
import type { Request, Response } from 'express';
import cors from 'cors';
import pendaftaranRoutes from './routes/pendaftaran.routes.js';
import dokterRoutes from './routes/dokter.routes.js';
import jenisPengobatanRoutes from './routes/jenis_pengobatan.routes.js';
import metodePembayaranRoutes from './routes/metode_pembayaran.routes.js';
import jadwalPengobatanRoutes from './routes/jadwal_pengobatan.route.js';
import serverless from 'serverless-http';

const app = express();
// const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())

app.use('/pendaftaran', pendaftaranRoutes);
app.use('/dokter', dokterRoutes);
app.use('/jenis-pengobatan', jenisPengobatanRoutes);
app.use('/metode-pembayaran', metodePembayaranRoutes);
app.use('/jadwal-pengobatan', jadwalPengobatanRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, worlds!');
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export const handler = serverless(app, { provider: 'azure' });

export default async (context: any, req: any) => {
  context.res = await handler(context, req);
};

// export const handler = serverless(app);
