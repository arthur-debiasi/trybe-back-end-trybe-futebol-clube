import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Team';

import { Response } from 'superagent';
import { teamsListMock } from './integration/utils/teamListMock';
// import { before } from 'node:test';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /teams:', () => {
  beforeEach(() => {
    sinon.stub(Teams, 'findAll').resolves(teamsListMock as Teams[]);
  });

  it('que tenha response com status 200', async () => {
    const res = await chai.request(app).get('/teams').send(teamsListMock);
    expect(res.status).to.be.eq(200);
    // expect(res.body).to.be.eq(teamsListMock);
  });
});
