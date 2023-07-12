import { z } from 'zod'

import { entityProps } from '0-core/domain/entities/Entity'

const userProps = {
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string(),
}

export const newUserSchema = z.object({
  name: userProps.name,
  email: userProps.email,
  password: userProps.password,
})

export const updateUserSchema = z.object({
  id: entityProps.id,
  name: userProps.name,
})

const { id, ...rest } = entityProps
export const UserSchema = z.object({ id, ...userProps, ...rest })
