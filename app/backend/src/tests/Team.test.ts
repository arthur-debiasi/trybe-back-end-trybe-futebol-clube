import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';

import { Response } from 'superagent';
import { teamsListMock } from './utils/teamListMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /teams:', () => {
  beforeEach(() => {
    sinon.stub(Teams, 'findAll').resolves(teamsListMock as Teams[]);
    sinon.stub(Teams, 'findByPk').resolves(teamsListMock[0] as Teams);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('que GET /teams tenha response com status 200 e body com a lista de times', async () => {
    const res = await chai.request(app).get('/teams');
    expect(res.status).to.be.eq(200);
    expect(res.body).to.be.deep.eq(teamsListMock);
  });
  it('que GET /teams/:id tenha response com status 200 e o time correspondente ao id', async () => {
    const res = await chai.request(app).get('teams/1');
    expect(res.status).to.be.eq(200);
    expect(res.body).to.be.deep.eq(teamsListMock[0]);
  });
});
