import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/Users';
import {
  invalidLoginEmail,
  invalidLoginEmailSchema,
  invalidLoginPassword,
  invalidLoginPasswordSchema,
  noEmailLogin,
  noPasswordLogin,
  tokenMock,
  userModel,
  validLogin,
} from './utils/loginMocks';
import JwtToken from '../utils/Jwt';
import Teams from '../database/models/Teams';
import { teamsListMock } from './utils/teamListMock';
import { Model } from 'sequelize';
import Matches from '../database/models/Matches';
import { matchesListMock } from './utils/matchesMock';
import leaderboardMock from './utils/leaderboardMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /leaderboard:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('que GET /leaderboard tenha response com status 200 retornando a classificação das equipes corretamente', async () => {
    sinon.stub(Teams, 'findAll').resolves(teamsListMock as Teams[]);
    sinon.stub(Matches, 'findAll').resolves(matchesListMock as Matches[]);
    const res = await chai.request(app).get('/leaderboard/home');
    expect(res.status).to.be.eq(200); 
    expect(res.body).to.be.deep.eq(leaderboardMock);
  });
});
