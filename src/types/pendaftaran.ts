export type PendaftaranInput = {
  nama_pasien: string;
  tanggal_lahir: Date;
  tempat_lahir: string;
  jenis_kelamin: 'L' | 'P';
  alamat: string;
  keluhan: string;
  jadwal_pengobatan_id: number;
  metode_pembayaran_id: number;
}

export type PendaftaranProp = {
  id: number;
  nama_pasien: string;
  tanggal_lahir: Date;
  tempat_lahir: string;
  jenis_kelamin: 'L' | 'P';
  alamat: string;
  keluhan: string;
  jadwal_pengobatan_id: number;
  metode_pembayaran_id: number;
}