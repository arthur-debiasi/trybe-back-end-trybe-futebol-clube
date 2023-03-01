import ErrorBarrel from '../errors/ErrorBarrel';
import { emailSchema, passwordSchema } from './schemas';

export const emailValidate = (email: string) => {
  const { error } = emailSchema.validate(email);
  if (error) throw new ErrorBarrel('Invalid email or password', '401');
};

export const passwordValidate = (password: string) => {
  const { error } = passwordSchema.validate(password);
  if (error) throw new ErrorBarrel('Invalid email or password', '401');
};
