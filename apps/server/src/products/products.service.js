import prisma from "../config/prisma-client";

export async function createProduct(data) {
  try {
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price),
        rating: parseFloat(data.rating),
        categorySlug: data.categorySlug,
        images: { create: data.images },
        stockStatus: data.stockStatus,
        quantity: parseInt(data.quantity),
      },
      include: { category: true, images: true },
    });
    return product;
  } catch (error) {
    throw new Error("Failed to create product: " + error.message);
  }
}

export async function getManyProducts(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  // const take = parseInt(page * limit);
  const products = await prisma.product.findMany({
    skip: skip,
    take: limit,
    include: {
      category: true,
      images: true,
    },
  });
  const totalProducts = await prisma.product.count();
  return {
    products,
    totalProducts,
    currentPage: page,
    totalPages: Math.ceil(totalProducts / limit),
  };
}

export async function getOneProduct(id) {
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      category: true,
      images: true,
    },
  });
  return product;
}

export async function updateProduct(id, data) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
    include: {
      category: true,
    },
  });
  return product;
}

export async function deleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}
