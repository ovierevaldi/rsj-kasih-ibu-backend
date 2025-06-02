/*
  Warnings:

  - You are about to drop the column `tanggal` on the `JadwalPengobatan` table. All the data in the column will be lost.
  - Added the required column `jadwal` to the `JadwalPengobatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JadwalPengobatan" DROP COLUMN "tanggal",
ADD COLUMN     "jadwal" TIMESTAMP NOT NULL;
