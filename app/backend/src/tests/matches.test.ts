import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { matchesListMock } from './utils/matchesMock';
import { Model, ModelStatic } from 'sequelize';
import IMatch from '../interfaces/IMatch';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /teams:', () => {
  beforeEach(() => {
    sinon.stub(Matches, 'findAll').resolves(matchesListMock as unknown as Model[]);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('que GET /teams tenha response com status 200 e body com a lista de times', async () => {
    const res = await chai.request(app).get('/teams');
    expect(res.status).to.be.eq(200);
    expect(res.body).to.be.deep.eq(matchesListMock);
  });
});
