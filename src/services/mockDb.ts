import type { Project } from "../types/project.types"
import type { Task, TaskStatus } from "../types/task.types"
import { now } from "../utils/date"
import { generateId } from "../utils/id"

// ---- Seed Helpers ----

const createProject = (name: string): Project => {
  const timestamp = now()

  return {
    id: generateId(),
    name,
    createdAt: timestamp,
    updatedAt: timestamp,
  }
}

const createTask = (
  projectId: string,
  title: string,
  status: TaskStatus
): Task => {
  const timestamp = now()

  return {
    id: generateId(),
    projectId,
    title,
    status,
    createdAt: timestamp,
    updatedAt: timestamp,
  }
}

// ---- Seed Data ----

const projectNames = [
  "Marketing Website",
  "Internal Dashboard",
  "Mobile App Redesign",
]

const projects: Project[] = projectNames.map(createProject)

const statuses: TaskStatus[] = ["todo", "in-progress", "done"]

const tasks: Task[] = projects.flatMap((project) =>
  Array.from({ length: 10 }).map((_, index) =>
    createTask(
      project.id,
      `Task ${index + 1} for ${project.name}`,
      statuses[Math.floor(Math.random() * statuses.length)]
    )
  )
)

// ---- In-Memory Database ----

export const mockDb: {
  projects: Project[]
  tasks: Task[]
} = {
  projects,
  tasks,
}