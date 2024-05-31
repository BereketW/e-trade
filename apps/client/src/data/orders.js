// "use server";

// import fetcher from "./fetcher";
// // import revalidate from "./revalidate.service";

// export async function createProduct(data) {
//   const product = fetcher.post("/products", data);
//   return JSON.stringify(product);
// }

// export async function getManyProducts(query = "") {
//   try {
//     const res = await fetcher.get(`/products?category=${query}`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getOneProduct(id) {
//   const res = await fetcher.get(`/products/${id}`);
//   return res.data;
// }

// export async function updateProduct(id, data) {
//   const res = await fetcher.put(`/products/${id}`, data);
//   return res.data;
// }

// export async function deleteProduct(id) {
//   const res = await fetcher.get(`/products/${id}`);
//   return res.data;
// }
