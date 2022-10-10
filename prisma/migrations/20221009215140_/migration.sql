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
CREATE TABLE `Checked_in` (
    `id` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,
    `roomId` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `startAt` DATETIME(3) NOT NULL,
    `endAt` DATETIME(3) NOT NULL,
    `cost` INTEGER NOT NULL,

    PRIMARY KEY (`customerId`, `adminId`, `roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Checked_in` ADD CONSTRAINT `Checked_in_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Checked_in` ADD CONSTRAINT `Checked_in_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Checked_in` ADD CONSTRAINT `Checked_in_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
