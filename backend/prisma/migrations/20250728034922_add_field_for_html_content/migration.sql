/*
  Warnings:

  - Added the required column `html_content` to the `entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entries" ADD COLUMN     "html_content" TEXT NOT NULL;
