import { Router, Request, Response } from 'express';
import { MetodePembayaranInput, MetodePembayaranProp, MetodePembayaranUpdate } from '../types/metode_pembayaran.ts';
import MetodePembayaranController from '../controller/metode_pembarayaran.controller.ts';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  MetodePembayaranController.prototype.listMetodePembayaran()
  .then((metodePembayaranList: MetodePembayaranProp[]) =>{
    return res.status(200).json(metodePembayaranList)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  MetodePembayaranController.prototype.getMetodePembayaranById(id)
  .then((metodePembayaranList: MetodePembayaranProp | null) =>{
    if(!metodePembayaranList)
      return res.status(404).json({ message: 'Metode Pembayaran not found' });

    return res.status(200).json(metodePembayaranList)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});


router.post('/', (req: Request, res: Response) => {
  const data = req.body as MetodePembayaranInput;

  MetodePembayaranController.prototype.insertMetodePembayaran(data)
  .then((result: boolean) => {
    if (result) {
      res.status(201).json({ message: 'Metode Pembayaran created successfully' });
    } else {
      res.status(500).json({ message: 'Failed to create Metode Pembayaran' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body as MetodePembayaranUpdate;

  MetodePembayaranController.prototype.updateMetodePembayaran(id, data)
  .then((result: boolean) => {
    if (result) {
      res.status(200).json({ message: 'Metode Pembayaran updated successfully' });
    } else {
      res.status(404).json({ message: 'Metode Pembayaran not found' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
  
});


export default router;