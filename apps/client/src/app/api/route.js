import { getManyProducts } from "@app/client/data/products";

export async function GET() {
  const data = await getManyProducts();
  return data;
}
