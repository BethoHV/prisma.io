import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main() {
    
    const result = await prisma.modules.create({
        data:{
            description:"Firebase do zero",
            name: "Fire base",
            Courses:{
                create:{
                    course:{
                        connect:{
                            id: "708d1bb6-2c25-466f-ac55-b96be4d9bd5d"
                        },
                    },
                },
            },
        },
    });

    console.log(result);
}

main();