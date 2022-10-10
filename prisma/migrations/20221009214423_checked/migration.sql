-- CreateTable
CREATE TABLE `CheckedIn` (
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
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CheckedIn` ADD CONSTRAINT `CheckedIn_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Rooms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
