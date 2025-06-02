export type DokterInputData = {
  nama: string
};

export type DokterUpdateData = Partial<DokterInputData>;

export type DokterProp = {
  id: number
  nama: string
}