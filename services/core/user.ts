export * as User from './user'

export interface Info {
  userID: string
  email: string
  name: string
}

export function fromID(_userID: string) {
  return {} as Info
}

export function list() {
  return [] as Info[]
}

export function fromEmail(_email: string) {
  return {} as Info
}

export function create(_email: string) {
  return {} as Info
}
