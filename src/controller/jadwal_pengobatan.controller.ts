import { JadwalPengobatanInput, JadwalPengobatanProp } from "../types/jadwalPengobatan.types";

const prisma = require("../lib/prisma")

export default class JadwalPengobatanController {

  async listJadwalPengobatan(): Promise<JadwalPengobatanProp[]> {
    try {
      const jadwalPengobatanList = await prisma.JadwalPengobatan.findMany({
        orderBy: {
          jadwal: 'asc'
        }
      });

      return jadwalPengobatanList.map((jp: any) => ({
          id: jp.id,
          jadwal: jp.jadwal,
          id_dokter: jp.id_dokter
      }));


    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch Jenis Pengobatan list");
    }
  };

  async insertJadwalPengobatan(jadwalPengobatanInput: JadwalPengobatanInput): Promise<boolean>{
    try {
      await prisma.JadwalPengobatan.create({
        data: {
          jadwal: jadwalPengobatanInput.jadwal,
          id_dokter: jadwalPengobatanInput.id_dokter,
        }
      });

      return true;
      
    } catch (error) {

      console.error("Error inserting Jenis Pengobatan:", error);
      throw new Error("Failed to insert Jenis Pengobatan");      
    }
  }
}