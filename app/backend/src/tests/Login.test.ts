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

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /teams:', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('que POST /login tenha response com status 200 com email e password válidos', async () => {
    sinon.stub(Users, 'findOne').resolves(userModel as Users);
    // sinon.stub(JwtToken, 'prototype' ).returns(tokenMock);
    const res = await chai.request(app).post('/login').send(validLogin);
    expect(res.status).to.be.eq(200);
    expect(res.body).to.not.be.deep.eq({token: tokenMock})
  });
  it('que POST /login tenha response com status 400  com email indefinido', async () => {
    // sinon.stub(Users, 'findOne').resolves(null);
    const res = await chai.request(app).post('/login').send(noEmailLogin);
    expect(res.status).to.be.eq(400);
    expect(res.body).to.be.deep.eq({ message: 'All fields must be filled' });
  });
  it('que POST /login tenha response com status 400  com email indefinido', async () => {
    // sinon.stub(Users, 'findOne').resolves(null);
    const res = await chai.request(app).post('/login').send(noPasswordLogin);
    expect(res.status).to.be.eq(400);
    expect(res.body).to.be.deep.eq({ message: 'All fields must be filled' });
  });
  it('que POST /login tenha response com status 401  com email não cadastrado', async () => {
    const res = await chai.request(app).post('/login').send(invalidLoginEmail);
    expect(res.status).to.be.eq(401);
    expect(res.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
  it('que POST /login tenha response com status 401  com senha inválida para o user', async () => {
    const res = await chai.request(app).post('/login').send(invalidLoginPassword);
    expect(res.status).to.be.eq(401);
    expect(res.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });

  it('que POST /login tenha response com status 401  com senha inválida para o user', async () => {
    const res = await chai.request(app).post('/login').send(invalidLoginEmailSchema);
    expect(res.status).to.be.eq(401);
    expect(res.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });

  it('que POST /login tenha response com status 401  com senha inválida para o user', async () => {
    const res = await chai.request(app).post('/login').send(invalidLoginPasswordSchema);
    expect(res.status).to.be.eq(401);
    expect(res.body).to.be.deep.eq({ message: 'Invalid email or password' });
  });
});
