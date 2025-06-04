export type JenisPengobatanInput =  {
  nama_pengobatan: string;
};


export type JenisPengobatanUpdate =  Partial<JenisPengobatanInput>;

export type JenisPengobatanProp =  {
  id: number;
  nama_pengobatan: string;
}