'use strict'

const { hasUncaughtExceptionCaptureCallback } = require('process');
const supertest = require('supertest');
const { isMainThread } = require('worker_threads');
const server = require ('../server.js');
const request = supertest(server.app);

//describe => test suite
//it => actual test
//expect => assertions as part of a larger test
describe('SERVER:', () => {
  it('handles invalid request', async () => {
    const response = await request.get('/random');
    expect(response.status).toEqual(404);
  });

  it('should send back hello on a / route', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(404);
  });
});