-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
