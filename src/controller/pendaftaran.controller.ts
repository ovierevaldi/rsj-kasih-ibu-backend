import { PendaftaranInput, PendaftaranProp } from "../types/pendaftaran";

import prisma from "../lib/prisma.js";

const insertPendaftaran = async (inputData: PendaftaranInput): Promise<number> => {
  try {
    const newPendaftaran = await prisma.pendaftaran.create({
      data:{
        nama_pasien: inputData.nama_pasien,
        tanggal_lahir: new Date(inputData.tanggal_lahir),
        tempat_lahir: inputData.tempat_lahir,
        jenis_kelamin: inputData.jenis_kelamin,
        alamat: inputData.alamat,
        keluhan: inputData.keluhan,
        jadwal_pengobatan_id: inputData.jadwal_pengobatan_id,
        metode_pembayaran_id: inputData.metode_pembayaran_id,
      }
    });

    return newPendaftaran.id;
    
  } catch (error) {
    console.log(error);

    throw new Error("Failed to insert Pendaftaran")
  }
};

const getPendaftaranById = async (id: number): Promise<any | null> => {
  try {
    const pendaftaran = await prisma.pendaftaran.findUnique({
      where: {
        id: id
      },
      include: {
        jadwal_pengobatan: {
          include: {
            dokter: {
              include: {
                jenis_pengobatan: true
              }
            }
          }
        },
        metode_pembayaran: true,
      },
    });

    if (!pendaftaran) {
      return null;
    }

    return pendaftaran;
  } catch (error) {

    console.log(error);
    throw new Error("Failed to fetch pendaftaran by ID");
  }
};


const listPendaftaran = async (): Promise<PendaftaranProp[]> => {

  try {
    const pendaftaranList = await prisma.pendaftaran.findMany({
      orderBy: {
        nama_pasien: 'asc'
      }
    });
    
     return pendaftaranList.map((pendaftaran) => {

      return {
        alamat: pendaftaran.alamat,
        id: pendaftaran.id,
        jadwal_pengobatan_id: pendaftaran.jadwal_pengobatan_id,
        jenis_kelamin: pendaftaran.jenis_kelamin,
        keluhan: pendaftaran.keluhan,
        metode_pembayaran_id: pendaftaran.metode_pembayaran_id,
        nama_pasien: pendaftaran.nama_pasien,
        tanggal_lahir: pendaftaran.tanggal_lahir,
        tempat_lahir: pendaftaran.tempat_lahir,
      };
    });


  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch pendaftaran list");
  }
};


export default { insertPendaftaran, listPendaftaran, getPendaftaranById }