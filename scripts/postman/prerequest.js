const crypto = require('crypto-js');

// Based on brianloveswords' base64url
function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64Encode(str, encoding) {
  return fromBase64(new Buffer(str, encoding).toString('base64'));
}

function bufferOrString(obj) {
  return Buffer.isBuffer(obj) || typeof obj === 'string';
}

function normalizeInput(thing) {
  return bufferOrString(thing) ? thing : JSON.stringify(thing);
}

// From jws -> jwsSecuredInput
function jwsSecuredInput(header, payload) {
  const encodedHeader = base64Encode(normalizeInput(header, 'binary'));
  const encodedPayload = base64Encode(normalizeInput(payload, 'utf8'));
  return `${encodedHeader}.${encodedPayload}`;
}

// From jwa -> createHmacSigner::sign
function signHmac(header, payload, secret) {
  const securedInput = jwsSecuredInput(header, payload);
  const signature = fromBase64(crypto.HmacSHA256(securedInput, secret).toString(crypto.enc.Base64));
  return `${securedInput}.${signature}`;
}

function createPbjxToken(content, aud, kid, secret) {
  const TTL = 5;

  const now = Math.floor(Date.now() / 1000);
  const iat = now;

  const header = {
    alg: 'HS256',
    typ: 'JWT',
    kid,
  };

  const payload = {
    aud,
    exp: now + TTL,
    iat,
    jti: crypto.HmacSHA256(`${aud}${iat}${content}`, secret).toString(crypto.enc.Hex)
  };

  return signHmac(header, payload, secret);
}


const kid = 'bearer';
const secret = pm.environment.get('access_token');
const aud = request.url.replace('{{pbjx_endpoint}}', pm.environment.get('pbjx_endpoint'));
const token = createPbjxToken(request.data, aud, kid, secret);
pm.environment.set('pbjx_token', token);
