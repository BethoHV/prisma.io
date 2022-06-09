import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main() {
    
    const result = await prisma.coursesModules.create({
        data:{
            fk_id_course:"708d1bb6-2c25-466f-ac55-b96be4d9bd5d",
            fk_id_module:"ead68be3-4625-4466-a320-2ae72445e25d",
        }
    });

    console.log(result);
}

main();