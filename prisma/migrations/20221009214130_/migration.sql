/*
  Warnings:

  - You are about to drop the `checkedin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `CheckedIn_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `CheckedIn_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `CheckedIn_roomId_fkey`;

-- DropTable
DROP TABLE `checkedin`;
