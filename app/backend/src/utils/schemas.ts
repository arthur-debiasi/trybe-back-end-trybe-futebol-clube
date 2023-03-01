import * as Joi from 'joi';

export const emailSchema = Joi.string().email().required();

export const passwordSchema = Joi.string().min(6).required();
