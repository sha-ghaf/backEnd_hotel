-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `checkedIn_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `checkedIn_customerId_fkey`;

-- DropForeignKey
ALTER TABLE `checkedin` DROP FOREIGN KEY `checkedIn_roomId_fkey`;

-- AddForeignKey
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
