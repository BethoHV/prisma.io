import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "ee756019-37c9-4950-bfdc-7245d19b02c5"
        },
        data:{
            duration: 250,
            name: "Curso top excelente de ReactJs"
        }
    })

    console.log(result)
}

main();