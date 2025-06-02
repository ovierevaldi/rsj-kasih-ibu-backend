import { Router, Request, Response } from 'express';
import JenisPengobatanController from '../controller/jenis_pengobatan.controller';
import { JenisPengobatanInput, JenisPengobatanProp, JenisPengobatanUpdate } from '../types/jenis_pengobatan';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  JenisPengobatanController.prototype.listJenisPengobatan()
  .then((JenisPengobatanList: JenisPengobatanProp[]) =>{
    return res.status(200).json(JenisPengobatanList)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  JenisPengobatanController.prototype.getJenisPengobatanById(id)
  .then((JenisPengobatanList: JenisPengobatanProp | null) =>{
    if(!JenisPengobatanList)
      return res.status(404).json({ message: 'Jenis Pengobatan not found' });

    return res.status(200).json(JenisPengobatanList)
  })
  .catch((error: Error) => {
    return res.status(500).json({ message: error.message });
  })
});


router.post('/', (req: Request, res: Response) => {
  const data = req.body as JenisPengobatanInput;

  JenisPengobatanController.prototype.insertJenisPengobatan(data)
  .then((result: boolean) => {
    if (result) {
      res.status(201).json({ message: 'Jenis Pengobatan created successfully' });
    } else {
      res.status(500).json({ message: 'Failed to create Jenis Pengobatan' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const data = req.body as JenisPengobatanUpdate;

  JenisPengobatanController.prototype.updateJenisPengobatan(id, data)
  .then((result: boolean) => {
    if (result) {
      res.status(200).json({ message: 'Jenis Pengobatan updated successfully' });
    } else {
      res.status(404).json({ message: 'Jenis Pengobatan not found' });
    }
  })
  .catch((error: Error) => {
    res.status(500).json({ message: error.message });
  });
  
});


module.exports  = router;