-- CreateTable
CREATE TABLE `checkedIn` (
    `id` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `roomId` INTEGER NOT NULL,
    `duration` DATETIME(3) NOT NULL,
    `cost` INTEGER NOT NULL,
    `feedback` VARCHAR(191) NOT NULL,
    `startAt` DATETIME(3) NOT NULL,
    `endAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`customerId`, `adminId`, `roomId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `checkedIn` ADD CONSTRAINT `checkedIn_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checkedIn` ADD CONSTRAINT `checkedIn_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `checkedIn` ADD CONSTRAINT `checkedIn_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
