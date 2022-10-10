-- AlterTable
ALTER TABLE `checked_in` ADD COLUMN `checked` ENUM('in', 'out') NOT NULL DEFAULT 'in';
