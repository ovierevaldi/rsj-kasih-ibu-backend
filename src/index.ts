import 'dotenv/config.js'
import express from 'express';
import cors from 'cors';
import pendaftaranRoutes from './routes/pendaftaran.routes.js';
import dokterRoutes from './routes/dokter.routes.js';
import jenisPengobatanRoutes from './routes/jenis_pengobatan.routes.js';
import metodePembayaranRoutes from './routes/metode_pembayaran.routes.js';
import jadwalPengobatanRoutes from './routes/jadwal_pengobatan.route.js';

const app = express();
const PORT = process.env.PORT || 4500;

app.use(cors())

app.use(express.json())

app.use('/pendaftaran', pendaftaranRoutes);
app.use('/dokter', dokterRoutes);
app.use('/jenis-pengobatan', jenisPengobatanRoutes);
app.use('/metode-pembayaran', metodePembayaranRoutes);
app.use('/jadwal-pengobatan', jadwalPengobatanRoutes);

app.get('/', (req, res) => {
  res.send('Hello, worlds!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});