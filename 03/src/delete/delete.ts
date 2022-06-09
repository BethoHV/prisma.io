import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main() {
    
    const result = await prisma.coursesModules.delete({
        where: {
            id: "ee886174-6378-42ad-aa9f-055e94f0f3f5"
        }
    });

    console.log(result);
}

main();