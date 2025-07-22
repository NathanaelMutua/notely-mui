-- CreateTable
CREATE TABLE "entries" (
    "user_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entry_title" TEXT NOT NULL,
    "entry_synopsis" TEXT NOT NULL,
    "entry_content" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entry_last_updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entries_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "entries" ADD CONSTRAINT "entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
