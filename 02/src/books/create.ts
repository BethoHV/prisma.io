import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data:{
            name: "At the mountains of Madness",
            author_id:  "7b853e1a-b856-4145-9269-2afcf6c5a45b",
        },
    });
    console.log(result);
}


main();