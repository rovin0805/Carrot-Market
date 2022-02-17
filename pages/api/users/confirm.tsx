import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;
  res.status(200).end();
}

export default withHandler('POST', handler);
