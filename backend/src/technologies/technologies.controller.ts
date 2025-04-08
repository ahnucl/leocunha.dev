import { Controller, Get } from '@nestjs/common'
import { Technology } from '@core'
import { TechnologiesProvider } from './technologies.provider'

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly repository: TechnologiesProvider) {}

  @Get()
  async getAll(): Promise<Technology[]> {
    return this.repository.getAll()
  }

  @Get('highlights')
  async getHighlights(): Promise<Technology[]> {
    return this.repository.getHighlights()
  }
}
