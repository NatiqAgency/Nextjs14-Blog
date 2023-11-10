-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "job" TEXT,
ADD COLUMN     "links" JSONB,
ADD COLUMN     "slug" TEXT;
