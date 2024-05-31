// billing-address.service.js

import prisma from "../config/prisma-client";

export async function createAddress(data) {
  const billingAddress = await prisma.billingAddress.create(data);

  return billingAddress;
}

export async function getManyBillingAddress() {
  const billingAddresses = await prisma.billingAddress.findMany();
  return billingAddresses;
}

export async function getOneAddress(id) {
  const address = await prisma.billingAddress.findUnique({
    where: { id },
    include: { AddressItems: { include: { product: true } } },
  });
  return address;
}

export async function updateAddress(id, data) {
  const address = await prisma.billingAddress.update({
    where: { id },
    data,
    include: { AddressItems: { include: { product: true } } },
  });
  return address;
}

export async function deleteAddress(id) {
  await prisma.billingAddress.delete({ where: { id } });
}
