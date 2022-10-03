import { Project } from '@tutorial-sst/core/project'
import { Task } from '@tutorial-sst/core/task'
import { User } from '@tutorial-sst/core/user'

const project = Project.create('Project 1')
const user = User.create('user@example.com')
const task = Task.create({ projectID: project.projectID, name: 'Task 1' })

Task.assign({
  taskID: task.taskID,
  userID: user.userID,
})
