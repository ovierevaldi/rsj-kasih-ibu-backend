import { Router, Request, Response } from 'express';
import { PendaftaranInput, PendaftaranProp } from '../types/pendaftaran';

// some-other-file.ts
import pendaftaranService from '../controller/pendaftaran.controller.js'


const router = Router();

router.get('/', (req: Request, res: Response) => {

  pendaftaranService.listPendaftaran()
  .then((pendaftaranList: PendaftaranProp[]) => {
    res.status(200).json(pendaftaranList);
  })
  .catch((error: Error) => {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Pendaftaran list", error: error.message });
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  pendaftaranService.getPendaftaranById(id)
  .then((pendafataranInfo: PendaftaranProp | null) => {
    res.status(200).json(pendafataranInfo);
  })
  .catch((error: Error) => {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Pendaftaran list", error: error.message });
  });
});

router.post('/', (req: Request, res: Response) => {
  const pendaftaranData = req.body as PendaftaranInput;

  pendaftaranService.insertPendaftaran(pendaftaranData)
  .then((pendaftaranId: number) => {
    res.status(201).json({ message: "Pendaftaran created successfully!", data: pendaftaranId});
  })
  .catch((error: Error) => {
    console.error(error);
    res.status(500).json({ message: "Failed to create Pendaftaran", error: error.message });
  });
  
});

export default router;