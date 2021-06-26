/*
  Warnings:

  - You are about to drop the `TestUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TestUser";

-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,

    PRIMARY KEY ("userId")
);
