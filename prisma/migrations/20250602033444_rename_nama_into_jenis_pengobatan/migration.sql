/*
  Warnings:

  - You are about to drop the column `nama` on the `jenis_pengobatan` table. All the data in the column will be lost.
  - Added the required column `nama_pengobatan` to the `jenis_pengobatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jenis_pengobatan" DROP COLUMN "nama",
ADD COLUMN     "nama_pengobatan" VARCHAR(255) NOT NULL;
