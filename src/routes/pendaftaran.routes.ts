import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Pendaftaran API is working!")
});

router.post('/', (req: Request, res: Response) => {
  const pendaftaranData = req.body;

  
});

module.exports = router;