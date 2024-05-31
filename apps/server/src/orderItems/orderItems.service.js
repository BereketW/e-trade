import prisma from "../config/prisma-client";

export async function getManyOrderItems() {
  const orderItems = await prisma.orderItem.findMany({
    include: {
      product: true,
    },
  });
  return orderItems;
}

export async function getOneOrderItem(id) {
  const order = await prisma.orderItem.findMany({
    where: { id },
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
