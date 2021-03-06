import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de Java",
      description: "Curso excelente de Java",
      teacher: {
        connectOrCreate:{
          where:{
            name:"Daniele Leão Evangelista"
          },
          create:{
            name:"Daniele Leão Evangelista"
          }
        }
      }
    },
  });

  console.log(result);
}

main();