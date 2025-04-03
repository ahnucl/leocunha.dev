/*
  Warnings:

  - Added the required column `repository_url` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "repository_url" TEXT NOT NULL;
