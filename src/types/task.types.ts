// Union type
export type TaskStatus = 'todo' | 'in-progress' | 'done'

export interface Task {
    id: string
    projectId: string
    title: string
    status: TaskStatus
    createdAt: string
    updatedAt: string
}