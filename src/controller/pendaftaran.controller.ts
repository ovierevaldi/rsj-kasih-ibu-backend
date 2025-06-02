import { PendaftaranInput } from "../types/pendaftaran";

const prisma = require("../lib/prisma")

const insertPendaftaran = async (inputData: PendaftaranInput) => {
  try {
    await prisma.pendaftaran.create({
      data:{
        nama_pasien: inputData.nama_pasien,
        tanggal_lahir: inputData.tanggal_lahir,
        tempat_lahir: inputData.tempat_lahir,
        jenis_kelamin: inputData.jenis_kelamin,
        alamat: inputData.alamat,
        keluhan: inputData.keluhan,
        jenis_pengobatan_id: inputData.jenis_pengobatan_id,
        dokter_pengobatan_id: inputData.dokter_pengobatan_id,
        waktu_pengobatan: inputData.waktu_pengobatan,
        metode_pembayaran_id: inputData.metode_pembayaran_id
      }
    });

    return 'Pendaftaran inserted successfully';
    
  } catch (error) {
    console.log(error);

    throw new Error("Failed to insert Pendaftaran")
  }
}