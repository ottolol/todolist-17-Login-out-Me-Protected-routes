// import { z } from "zod"

// export const LoginArg = z.object({
//   email: z.string(),
//   password: z.string(),
//   rememberMe: z.boolean().optional(),
//   captcha: z.string().optional()
// })

// export type LoginArgs = z.infer<typeof LoginArg>

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}