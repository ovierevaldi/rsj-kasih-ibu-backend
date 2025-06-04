import { DokterInputData, DokterProp, DokterUpdateData } from "../types/dokter.ts";
import prisma from "../lib/prisma.ts";

const listDokter = async (): Promise<DokterProp[]> => {

  try {
     const dokterList = await prisma.dokter.findMany({
      orderBy: {
        nama: 'asc'
      }
     });

     return dokterList.map((dokter: any) => ({
        id: dokter.id,
        nama: dokter.nama,
        jenis_pengobatan_id: dokter.jenis_pengobatan_id
     }));


  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch Dokter list");
  }
};

const getDokterById = async (id: number): Promise<DokterProp | null> => {
  try {
    const dokter = await prisma.dokter.findUnique({
      where: {
        id: id
      }
    });

    if (!dokter) {
      return null;
    }

    return {
      id: dokter.id,
      nama: dokter.nama,
      jenis_pengobatan_id: dokter.jenis_pengobatan_id
      
    };
  } catch (error) {

    console.log(error);
    throw new Error("Failed to fetch Dokter by ID");
  }
}

const insertDokter = async (data: DokterInputData): Promise<boolean> => {
  try {
    await prisma.dokter.create({
      data: {
        nama: data.nama,
        jenis_pengobatan_id: data.jenis_pengobatan_id
      }
    });

    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to insert Dokter");    
  }
};

const updateDokter = async (id: number, data: DokterUpdateData): Promise<boolean> => {
  try {
    await prisma.dokter.update({
      where: {
        id: id
      },
      data: {
        nama: data.nama
      }
    });

    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update Dokter");
  }
}

export default { listDokter, insertDokter, getDokterById, updateDokter };