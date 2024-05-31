import fetcher from "./fetcher";

export async function getManyOrderItems() {
  try {
    const res = await fetcher.get("/orderitems");
    return res.data;
  } catch (error) {
    return { success: false, data: error };
  }
}
