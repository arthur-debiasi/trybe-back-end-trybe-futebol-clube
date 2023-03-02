export const validLogin = {
  email: 'user@user.com',
  password: 'secret_user'
}

export const invalidLoginEmail = {
  email: 'userererererererre@user.com',
  password: 'secret_user'
}

export const invalidLoginEmailSchema = {
  email: 'useruser.com',
  password: 'secret_user'
}

export const invalidLoginPasswordSchema = {
  email: 'useruser.com',
  password: 'se'
}
export const invalidLoginPassword = {
  email: 'user@user.com',
  password: 'secret_uasdaasdasdasddser'
}

export const noEmailLogin = {
  password: 'secret_user',
}

export const noPasswordLogin = {
  email: 'user@user.com',
}

export const userModel = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
}

export const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJVc2VyIiwiaWF0IjoxNjc3Njc3MDcwLCJleHAiOjE2Nzc2OTg2NzB9.slfdMe_6pkkU4pBBttSQxkuQ9Gs6GAlaeo2EBjrkVpc";