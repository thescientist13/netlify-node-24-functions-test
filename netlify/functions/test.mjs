import { version } from 'node:process';

export default async (req, context) => {
  const pattern = new URLPattern(req.url);
  console.log({ pattern });
  return new Response("testing URLPattern on Node " + version);
};