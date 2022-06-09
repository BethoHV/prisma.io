import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data:{
            name: "J.R.R Tolkien",
            books:{
               createMany:{
                   data:[
                       {name:"The Hobbit"},
                       {name:"Lord of the Rings"},
                   ],
               },
            },
        },
    });
    console.log(result);
}


main();