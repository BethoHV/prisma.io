import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de ReactJs",
      description: "Curso excelente de ReactJs",
      fk_id_teacher: "ebe23103-9eb7-4c0c-a351-d25ba2534a11"
    },
  });

  console.log(result);
}

main();