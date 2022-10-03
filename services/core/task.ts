export * as Task from './task'

export interface Info {
  taskID: string
  projectID: string
  assigneeID: string
  name: string
  description: string
  times: {
    created: Date
    completed?: Date
    archived?: Date
  }
}

export function create(_input: { projectID: string; name: string }) {
  return {} as Info
}

export function archive(_input: { taskID: string; name: string }) {
  return {} as Info
}

export function complete(_input: { taskID: string; name: string }) {
  return {} as Info
}

export function assign(_input: { taskID: string; userID: string }) {
  return {} as Info
}

export function rename(_input: { taskID: string; name: string }) {
  return {} as Info
}

export function forProject(_input: { projectID: string }) {
  return [] as Info[]
}
