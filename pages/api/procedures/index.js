import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getProcedures } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const procedures = await getProcedures(
    req.db,
  );
  res.send(procedures);
});

export default handler;
