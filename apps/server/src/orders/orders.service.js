import { limits } from "argon2";
import prisma from "../config/prisma-client";

export async function createOrder(data) {
  const orderData = {
    paymentRef: data.paymentRef,
    totalPrice: 0,
    // billingAddressId: data.billingAddressId,
    billingAddress: {
      connect: { id: data.billingAddressId },
    },
    user: {
      connect: {
        id: data.userId,
      },
    },
    orderItems: {
      createMany: {
        data: data.orderItems,
        skipDuplicates: true,
      },
    },
  };

  let order = await prisma.order.create({
    data: orderData,
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
      user: {
        select: {
          firstName: true,
          lastName: true,
          email: true,
          password: false,
        },
      },
    },
  });

  let totalPrice = 0;
  order.orderItems.forEach((item) => {
    totalPrice = item.totalPrice;
  });

  order = await prisma.order.update({
    where: { id: order.id },
    data: {
      totalPrice: totalPrice,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return order;
}

export async function getManyOrders(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const orders = await prisma.order.findMany({
    skip: skip,
    take: limit,
    include: {
      orderItems: {
        include: {
          product: { include: { images: true } },
        },
      },
      billingAddress: true,
      user: {
        select: {
          email: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
  const totalOrders = await prisma.order.count();
  return {
    orders,
    totalProducts,
    currentPage: page,
    totalPages: Math.ceil(totalOrders / limit),
  };
}

export async function getOneOrder(id) {
  const order = await prisma.order.findFirst({
    where: { id },
    include: {
      orderItems: {
        include: {
          product: { include: { images: true } },
        },
      },
      billingAddress: true,
    },
  });
  return order;
}

export async function updateOrder(id, data) {
  const order = await prisma.order.update({
    where: { paymentRef: id },
    data: data,
  });
  return order;
}

export async function deleteOrder(id) {
  const order = await prisma.order.delete({
    where: { id },
  });
  return order;
}
