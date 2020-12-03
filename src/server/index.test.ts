import Request from 'supertest';

import { app as _app, server } from './index';

describe('Express server routes', () => {
  let app: Request.SuperTest<Request.Test>;

  beforeEach(() => app = Request(_app));

  afterEach(() => server.close());

  describe('GET /ping', () => {
    it('success', async () => {
      const { text, status } = await app.get('/ping');
      expect(status).toEqual(200);
      expect(text).toEqual('pong');
    });
  });
});