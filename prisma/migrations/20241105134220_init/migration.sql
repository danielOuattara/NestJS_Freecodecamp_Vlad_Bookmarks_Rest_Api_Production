-- CreateTable
CREATE TABLE
    "User" (
        "id" SERIAL NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "firstname" TEXT,
        "lastname" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    );

-- CreateTable
CREATE TABLE
    "Bookmark" (
        "id" SERIAL NOT NULL,
        "title" TEXT NOT NULL,
        "description" TEXT,
        "link" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL,
        CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
    );