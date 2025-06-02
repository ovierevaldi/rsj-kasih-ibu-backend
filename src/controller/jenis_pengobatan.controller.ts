import { JenisPengobatanInput, JenisPengobatanProp, JenisPengobatanUpdate } from "../types/jenis_pengobatan";

const prisma = require("../lib/prisma")

export default class JenisPengobatanController{
  async insertJenisPengobatan(jenisPengobatanInput: JenisPengobatanInput): Promise<boolean>{
    try {
      await prisma.jenis_pengobatan.create({
        data: {
          nama_pengobatan: jenisPengobatanInput.nama_pengobatan
        }
      });

      return true;
    } catch (error) {

      console.error("Error inserting Jenis Pengobatan:", error);
      throw new Error("Failed to insert Jenis Pengobatan");      
    }
  }

  async listJenisPengobatan(): Promise<JenisPengobatanProp[]> {
    try {
      const jenisPengobatanList = await prisma.jenis_pengobatan.findMany({
        orderBy: {
          nama_pengobatan: 'asc'
        }
      });

      return jenisPengobatanList.map((jp: any) => ({
          id: jp.id,
          nama: jp.nama_pengobatan
      }));


    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch Jenis Pengobatan list");
    }
  };

  async getJenisPengobatanById (id: number): Promise<JenisPengobatanProp | null>{
    try {
      const jenisPengobatan = await prisma.jenis_pengobatan.findUnique({
        where: {
          id: id
        }
      });

      if (!jenisPengobatan) {
        return null;
      }

      return {
        id: jenisPengobatan.id,
        nama_pengobatan: jenisPengobatan.nama_pengobatan
      };
    } catch (error) {

      console.log(error);
      throw new Error("Failed to fetch Jenis Pengobatan by ID");
    }
  }

  async updateJenisPengobatan (id: number, data: JenisPengobatanUpdate): Promise<boolean> {
    try {
      await prisma.jenis_pengobatan.update({
        where: {
          id: id
        },
        data: {
          nama_pengobatan: data.nama_pengobatan
        }
      });

      return true;

    } catch (error) {
      console.log(error);
      throw new Error("Failed to update Jenis Pengobatan");
    }
  }
}