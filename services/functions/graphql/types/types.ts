import { Project } from '@tutorial-sst/core/project'
import { Task } from '@tutorial-sst/core/task'
import { User } from '@tutorial-sst/core/user'
import { builder } from '../builder'

export const UserType = builder.objectRef<User.Info>('User').implement({
  fields: (t) => {
    return {
      id: t.exposeID('userID'),
      name: t.exposeString('name'),
      email: t.exposeString('email'),
    }
  },
})

export const TaskType = builder.objectRef<Task.Info>('Task').implement({
  fields: (t) => {
    return {
      id: t.exposeID('taskID'),
      name: t.exposeString('name'),
      assignee: t.field({
        type: UserType,
        resolve: (task) => User.fromID(task.assigneeID),
      }),
    }
  },
})

export const ProjectType = builder.objectRef<Project.Info>('Project').implement({
  fields: (t) => {
    return {
      id: t.exposeID('projectID'),
      name: t.exposeString('name'),
      deleted: t.field({
        type: 'Boolean',
        resolve: (project) => project.times.deleted !== null,
      }),
      // deletedAt: t.field({
      //   type: String,
      //   nullable: true,
      //   resolve: (project) => project.times.deleted?.toISOString(),
      // }),
      tasks: t.field({
        type: [TaskType],
        resolve: (project) => {
          return Task.forProject({ projectID: project.projectID })
        },
      }),
    }
  },
})

builder.queryFields((t) => {
  return {
    project: t.field({
      type: ProjectType,
      args: {
        projectID: t.arg.string({ required: true }),
      },
      resolve: (_, args) => Project.fromID(args.projectID),
    }),
  }
})

builder.mutationFields((t) => {
  return {
    createProject: t.field({
      type: ProjectType,
      args: {
        name: t.arg.string({ required: true }),
      },
      resolve: (_, args) => Project.create(args.name),
    }),
  }
})
