export type JadwalPengobatanInput = {
  jadwal: Date;
  id_dokter: number;
}

export type JadwalPengobatanProp = {
  id: number;
  jadwal: Date;
  id_dokter?: number;
  nama_dokter?: string;
}