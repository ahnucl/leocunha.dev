import { Controller, Get, Param } from '@nestjs/common'
import { ProjectsProvider } from './projects.provider'

@Controller('projects')
export class ProjectsController {
  constructor(private readonly repository: ProjectsProvider) {}

  @Get()
  async getAll() {
    return this.repository.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.repository.getById(Number(id))
  }
}
