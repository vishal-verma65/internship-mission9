function base64UrlEncode(obj) {
  return Buffer.from(JSON.stringify(obj))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function generateMockToken(payload) {
  const header = { alg: 'HS256', typ: 'JWT' };

  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);
  const fakeSignature = Buffer.from('mock-signature-not-secure').toString('base64');

  return `${encodedHeader}.${encodedPayload}.${fakeSignature}`;
}

export { generateMockToken };