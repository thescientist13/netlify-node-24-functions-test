import { version } from 'node:process';

export default async (req, context) => {
  return new Response("testing URLPattern on Node " + version);
};