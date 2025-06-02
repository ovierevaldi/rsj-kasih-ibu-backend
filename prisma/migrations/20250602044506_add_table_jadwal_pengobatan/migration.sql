-- CreateTable
CREATE TABLE "JadwalPengobatan" (
    "id" SERIAL NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL DEFAULT '',
    "modifiedBy" VARCHAR(255) NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "tanggal" TIMESTAMP NOT NULL,
    "id_pengobatan" INTEGER NOT NULL,
    "id_dokter" INTEGER NOT NULL,

    CONSTRAINT "JadwalPengobatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JadwalPengobatan" ADD CONSTRAINT "JadwalPengobatan_id_pengobatan_fkey" FOREIGN KEY ("id_pengobatan") REFERENCES "jenis_pengobatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalPengobatan" ADD CONSTRAINT "JadwalPengobatan_id_dokter_fkey" FOREIGN KEY ("id_dokter") REFERENCES "dokter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
