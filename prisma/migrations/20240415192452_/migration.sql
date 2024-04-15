/*
  Warnings:

  - You are about to drop the column `color` on the `Category` table. All the data in the column will be lost.
  - Added the required column `background` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "color",
ADD COLUMN     "background" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL;
