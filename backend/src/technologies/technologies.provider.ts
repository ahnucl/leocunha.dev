import { Technology } from '@core'
import { Injectable } from '@nestjs/common'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class TechnologiesProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Technology[]> {
    return this.prisma.technology.findMany()
  }

  async getHighlights(): Promise<Technology[]> {
    return this.prisma.technology.findMany({
      where: {
        isHighlight: true,
      },
    })
  }
}
