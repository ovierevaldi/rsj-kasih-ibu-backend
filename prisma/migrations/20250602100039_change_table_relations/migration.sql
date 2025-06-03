/*
  Warnings:

  - You are about to drop the column `dokter_pengobatan_id` on the `Pendaftaran` table. All the data in the column will be lost.
  - Added the required column `jadwal_pengobatan_id` to the `Pendaftaran` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pendaftaran" DROP CONSTRAINT "Pendaftaran_dokter_pengobatan_id_fkey";

-- AlterTable
ALTER TABLE "Pendaftaran" DROP COLUMN "dokter_pengobatan_id",
ADD COLUMN     "jadwal_pengobatan_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pendaftaran" ADD CONSTRAINT "Pendaftaran_jadwal_pengobatan_id_fkey" FOREIGN KEY ("jadwal_pengobatan_id") REFERENCES "JadwalPengobatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
