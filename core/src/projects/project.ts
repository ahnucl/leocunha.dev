import { Technology } from '../technologies/technology'
import { Level } from './level'
import { Type } from './type'

export interface Project {
  id: number
  name: string
  description: string
  images: string[]
  type: Type
  level: Level
  isHighlight: boolean
  repository: string
  technologies: Technology[]
}
