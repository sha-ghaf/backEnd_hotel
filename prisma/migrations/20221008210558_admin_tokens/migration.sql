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

-- CreateTable
CREATE TABLE `AdminTokens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adminId` INTEGER NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AdminTokens` ADD CONSTRAINT `AdminTokens_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
