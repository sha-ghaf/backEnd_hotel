/*
  Warnings:

  - Changed the type of `duration` on the `checkedin` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `checkedin` DROP COLUMN `duration`,
    ADD COLUMN `duration` INTEGER NOT NULL;
