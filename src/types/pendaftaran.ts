export type PendaftaranInput = {
  nama_pasien: string;
  tanggal_lahir: Date;
  tempat_lahir: string;
  jenis_kelamin: 'L' | 'P';
  alamat: string;
  keluhan: string;
  jenis_pengobatan_id: number,
  dokter_pengobatan_id: number,
  waktu_pengobatan: Date;
  metode_pembayaran_id: number;
}