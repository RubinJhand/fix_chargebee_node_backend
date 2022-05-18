import fs from 'fs';
import path from 'path';

const key = fs.readFileSync(path.resolve('./src/config/openssl/key.pem'));
const cert = fs.readFileSync(path.resolve('./src/config/openssl/cert.pem'));
//  const csr = fs.readFileSync('./csr.pem');

export const serverOptions = { key: key, cert: cert };
