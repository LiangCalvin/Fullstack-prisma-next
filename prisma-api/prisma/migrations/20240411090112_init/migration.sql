/*
  Warnings:

  - Added the required column `thumbnail` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `thumbnail` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `thumbnail` VARCHAR(255) NOT NULL;
