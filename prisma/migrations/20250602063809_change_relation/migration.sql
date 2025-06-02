/*
  Warnings:

  - You are about to drop the column `jenis_pengobatan_id` on the `Pendaftaran` table. All the data in the column will be lost.
  - Added the required column `jenis_pengobatan_id` to the `dokter` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pendaftaran" DROP CONSTRAINT "Pendaftaran_jenis_pengobatan_id_fkey";

-- AlterTable
ALTER TABLE "Pendaftaran" DROP COLUMN "jenis_pengobatan_id";

-- AlterTable
ALTER TABLE "dokter" ADD COLUMN     "jenis_pengobatan_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "dokter" ADD CONSTRAINT "dokter_jenis_pengobatan_id_fkey" FOREIGN KEY ("jenis_pengobatan_id") REFERENCES "jenis_pengobatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
