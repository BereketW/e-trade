// import { Prisma } from '@repo/prisma-client';
import prisma from "../config/prisma-client";

export async function createCategory(data) {
  const { name, slug, image } = data;
  const imageUrl = image.url;
  const existingCategory = await getOneCategory(slug);
  if (existingCategory) {
    console.log("Category exists");
    return;
  }
  const category = await prisma.category.create({
    data: {
      name,
      slug,
      image: imageUrl,
    },
    include: {
      products: true,
    },
  });
  return category;
}

export async function getManyCategories() {
  const categories = await prisma.category.findMany({
    include: {
      products: true,
    },
  });
  return categories;
}

export async function getOneCategory(slug) {
  const category = await prisma.category.findFirst({ where: { slug } });
  return category;
}

export async function updateCategory(id, data) {
  const category = await prisma.category.update({
    where: { id },
    data: data,
  });
  return category;
}

export async function deleteCategory(id) {
  const category = await prisma.category.delete({ where: { id } });
  return category;
}
