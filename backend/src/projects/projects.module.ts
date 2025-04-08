import { Module } from '@nestjs/common'
import { DbModule } from 'src/db/db.module'
import { ProjectsController } from './projects.controller'
import { ProjectsProvider } from './projects.provider'

@Module({
  providers: [ProjectsProvider],
  controllers: [ProjectsController],
  imports: [DbModule],
})
export class ProjectsModule {}
