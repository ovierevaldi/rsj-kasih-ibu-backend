/*
  Warnings:

  - You are about to drop the column `id_pengobatan` on the `JadwalPengobatan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "JadwalPengobatan" DROP CONSTRAINT "JadwalPengobatan_id_pengobatan_fkey";

-- AlterTable
ALTER TABLE "JadwalPengobatan" DROP COLUMN "id_pengobatan";
