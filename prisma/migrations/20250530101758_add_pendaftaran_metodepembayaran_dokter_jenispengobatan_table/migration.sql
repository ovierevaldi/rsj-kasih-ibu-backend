-- CreateTable
CREATE TABLE "jenis_pengobatan" (
    "id" SERIAL NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL DEFAULT '',
    "modifiedBy" VARCHAR(255) NOT NULL DEFAULT '',
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "jenis_pengobatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dokter" (
    "id" SERIAL NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL DEFAULT '',
    "modifiedBy" VARCHAR(255) NOT NULL DEFAULT '',
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "dokter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metode_pembayaran" (
    "id" SERIAL NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL DEFAULT '',
    "modifiedBy" VARCHAR(255) NOT NULL DEFAULT '',
    "nama" VARCHAR(255) NOT NULL,

    CONSTRAINT "metode_pembayaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pendaftaran" (
    "id" SERIAL NOT NULL,
    "createdBy" VARCHAR(255) NOT NULL DEFAULT '',
    "modifiedBy" VARCHAR(255) NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "nomor_pendaftaran" VARCHAR(255) NOT NULL,
    "nama_pasien" VARCHAR(255) NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "tempat_lahir" VARCHAR(255) NOT NULL,
    "jenis_kelamin" VARCHAR(10) NOT NULL,
    "alamat" TEXT NOT NULL,
    "keluhan" TEXT NOT NULL,
    "jenis_pengobatan_id" INTEGER NOT NULL,
    "dokter_pengobatan_id" INTEGER NOT NULL,
    "metode_pembayaran_id" INTEGER NOT NULL,
    "waktu_pengobatan" TIMESTAMP NOT NULL,

    CONSTRAINT "Pendaftaran_pkey" PRIMARY KEY ("id")
);
