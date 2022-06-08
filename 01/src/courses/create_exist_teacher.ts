import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React native",
      description: "Curso excelente de React Native",
      teacher: {
        connect:{
            id: "12d32149-cffc-4638-910b-7c1418194b4a",
        },
      },
    },
  });

  console.log(result);
}

main();