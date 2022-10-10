-- CreateTable
CREATE TABLE `Rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('single', 'double') NOT NULL,
    `dayCast` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('Available', 'Reserved', 'Disabled') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
