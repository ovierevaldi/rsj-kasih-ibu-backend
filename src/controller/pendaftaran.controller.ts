import { PendaftaranInput, PendaftaranProp } from "../types/pendaftaran";

const prisma = require("../lib/prisma")

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

const getPendaftaranById = async (id: number): Promise<PendaftaranProp | null> => {
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

    return {...pendaftaran};
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

     return pendaftaranList.map((pendaftaran: PendaftaranProp) => ({...pendaftaran}));

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch pendaftaran list");
  }
};


module.exports = { insertPendaftaran, listPendaftaran, getPendaftaranById }