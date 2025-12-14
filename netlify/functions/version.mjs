import { version } from 'node:process';

export default async (req, context) => {
  return new Response(`Node version is ${version}`);
};