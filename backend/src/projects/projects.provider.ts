/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Project } from '@core'
import { Injectable } from '@nestjs/common'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class ProjectsProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  getAll(): Promise<Project[]> {
    return this.prisma.project.findMany({
      include: {
        technologies: {
          select: {
            id: true,
            name: true,
            image: true,
            isHighlight: true,
          },
        },
      },
    }) as any
  }

  getById(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: {
        id,
      },
      include: { technologies: true },
    }) as any
  }
}
