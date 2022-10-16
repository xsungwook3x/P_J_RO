-- CreateTable
CREATE TABLE `Routines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `mon` BOOLEAN NOT NULL DEFAULT false,
    `tue` BOOLEAN NOT NULL DEFAULT false,
    `wed` BOOLEAN NOT NULL DEFAULT false,
    `thr` BOOLEAN NOT NULL DEFAULT false,
    `fri` BOOLEAN NOT NULL DEFAULT false,
    `sat` BOOLEAN NOT NULL DEFAULT false,
    `sun` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
