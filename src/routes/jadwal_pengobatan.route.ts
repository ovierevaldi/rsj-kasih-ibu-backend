import { Request, Response, Router } from "express";
import JadwalPengobatanController from "../controller/jadwal_pengobatan.controller";
import { JadwalPengobatanInput, JadwalPengobatanProp } from "../types/jadwalPengobatan.types";

const router = Router();

router.get('/', (req: Request, res: Response) => {

  JadwalPengobatanController.prototype.listJadwalPengobatan()
  .then((result: JadwalPengobatanProp[]) => {
    res.status(200).json(result);
  })
  .catch((error: Error) => {
    console.error("Error fetching Jadwal Pengobatan:", error);
    res.status(500).json({ message: error.message });
  });
})

router.post('/', (req: Request, res: Response) => {
  const input = req.body as JadwalPengobatanInput;

  JadwalPengobatanController.prototype.insertJadwalPengobatan(input)
  .then((result: boolean) => {
    if (result) {
      res.status(201).json({ message: "Jadwal Pengobatan created successfully" });
    } else {
      res.status(400).json({ message: "Failed to create Jadwal Pengobatan" });
    }
  })
  .catch((error: Error) => {
    console.error("Error creating Jadwal Pengobatan:", error);
    res.status(500).json({ message: error.message });
  });
})

module.exports = router;