import { JadwalPengobatanInput, JadwalPengobatanProp } from "../types/jadwalPengobatan.types";
import prisma from "../lib/prisma.js";
export default class JadwalPengobatanController {

  async listJadwalPengobatan(): Promise<JadwalPengobatanProp[]> {
    try {
      const jadwalPengobatanList = await prisma.jadwalPengobatan.findMany({
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

  async listJadwalPengobatanByDate(date: string, jenis_pengobatan?: number): Promise<JadwalPengobatanProp[]> {
    try {
      const selectedDate = new Date(date);
      const { start, end } = this.getStartAndEndOfDate(selectedDate);
      
      const jadwalPengobatanList = await prisma.jadwalPengobatan.findMany({
        where: {
          jadwal: {
            gte: start,
            lt: end
          },
          ...(jenis_pengobatan && {
            dokter: {
              jenis_pengobatan_id: jenis_pengobatan
            }
          })
        },
        include: {
          dokter: {
            include: {
              jenis_pengobatan: true
            }
          }
        },
        orderBy: {
          jadwal: 'asc'
        }
      });

      return jadwalPengobatanList.map((jp: any) => ({
          id: jp.id,
          jadwal: jp.jadwal,
          id_dokter: jp.dokter?.id,
          nama_dokter: jp.dokter?.nama
      }));


    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch Jenis Pengobatan list");
    }
  };

  async insertJadwalPengobatan(jadwalPengobatanInput: JadwalPengobatanInput): Promise<boolean>{
    try {
      await prisma.jadwalPengobatan.create({
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
  };

  getStartAndEndOfDate(date: Date) {
    const start = new Date(date); // clone
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date(start); // clone again
    end.setUTCDate(end.getDate() + 1);

    return { start, end };
  };

  parseLocalDateOnly(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // JS month is 0-based
}
}