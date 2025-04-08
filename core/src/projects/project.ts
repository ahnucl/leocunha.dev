import { Technology } from '../technologies/technology'
import { ProjectLevel } from './project-level'
import { ProjectType } from './project-type'

export interface Project {
  id: number
  name: string
  description: string
  images: string[]
  type: ProjectType
  level: ProjectLevel
  isHighlight: boolean
  repositoryURL: string
  technologies: Technology[]
}
