import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';
import mail from '@sendgrid/mail';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) {
    return res.status(400).json({ ok: false });
  }
  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.MESSAGING_SERVICES_SID,
    //   to: process.env.PHONE!,
    //   body: `Your login token is ${payload}.`,
    // });
  } else if (email) {
    // const email = await mail.send({
    //   from: 'qhdrn67@naver.com',
    //   to: 'qhdrn67@naver.com',
    //   subject: 'Your Carrot Market Verification Email',
    //   text: `Your token is ${payload}`,
    //   html: `<strong>Your token is ${payload}</strong>`,
    // });
  }
  return res.json({ ok: true });
}

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
