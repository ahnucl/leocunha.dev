-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('WEB', 'MOBILE');

-- CreateEnum
CREATE TYPE "ProjectLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "level" "ProjectLevel" NOT NULL,
    "type" "ProjectType" NOT NULL,
    "is_highlight" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
