import { Module } from '@nestjs/common'
import { DbModule } from 'src/db/db.module'
import { TechnologiesController } from './technologies.controller'
import { TechnologiesProvider } from './technologies.provider'

@Module({
  providers: [TechnologiesProvider],
  controllers: [TechnologiesController],
  imports: [DbModule],
})
export class TechnologiesModule {}
