-- AddForeignKey
ALTER TABLE "Pendaftaran" ADD CONSTRAINT "Pendaftaran_jenis_pengobatan_id_fkey" FOREIGN KEY ("jenis_pengobatan_id") REFERENCES "jenis_pengobatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pendaftaran" ADD CONSTRAINT "Pendaftaran_dokter_pengobatan_id_fkey" FOREIGN KEY ("dokter_pengobatan_id") REFERENCES "dokter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pendaftaran" ADD CONSTRAINT "Pendaftaran_metode_pembayaran_id_fkey" FOREIGN KEY ("metode_pembayaran_id") REFERENCES "metode_pembayaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
