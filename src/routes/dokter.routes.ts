import { Router, Request, Response } from 'express';
import { DokterInputData, DokterProp } from '../types/dokter';
const { insertDokter, listDokter, getDokterById, updateDokter } = require('../controller/dokter.controller');
 
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  listDokter()
  .then((dokterList: DokterProp[]) =>{
    return res.status(200).json(dokterList)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  getDokterById(id)
  .then((dokter: DokterProp | null) =>{
    if(!dokter)
      return res.status(404).json({ message: 'Dokter not found' });

    return res.status(200).json(dokter)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});


router.post('/', (req: Request, res: Response) => {
  const data = req.body;

  insertDokter(data as DokterInputData)
  .then((result: boolean) => {
    if (result) {
      res.status(201).json({ message: 'Dokter created successfully' });
    } else {
      res.status(500).json({ message: 'Failed to create Dokter' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body;

  updateDokter(id, data)
  .then((result: boolean) => {
    if (result) {
      res.status(200).json({ message: 'Dokter updated successfully' });
    } else {
      res.status(404).json({ message: 'Dokter not found' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
  
});

module.exports = router;