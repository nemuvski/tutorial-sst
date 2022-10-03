export * as Project from './project'

export interface Info {
  projectID: string
  name: string
  times: {
    created: Date
    deleted?: Date
  }
}

export function create(_name: string) {
  return {} as Info
}

export function rename(_projectID: string, _name: string) {
  return {} as Info
}

export function remove(_projectID: string) {
  return {} as Info
}

export function fromID(_projectID: string) {
  return {} as Info
}
