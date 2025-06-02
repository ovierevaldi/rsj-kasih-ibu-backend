export type DokterInputData = {
  nama: string
    jenis_pengobatan_id: number
};

export type DokterUpdateData = Partial<DokterInputData>;

export type DokterProp = {
  id: number
  nama: string
  jenis_pengobatan_id?: number
}