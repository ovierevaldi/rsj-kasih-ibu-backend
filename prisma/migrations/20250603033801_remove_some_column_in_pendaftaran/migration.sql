/*
  Warnings:

  - You are about to drop the column `nomor_pendaftaran` on the `Pendaftaran` table. All the data in the column will be lost.
  - You are about to drop the column `waktu_pengobatan` on the `Pendaftaran` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pendaftaran" DROP COLUMN "nomor_pendaftaran",
DROP COLUMN "waktu_pengobatan";
