"use server";

import fetcher from "./fetcher";
// import revalidate from "./revalidate.service";

export async function createCategory(data) {
  try {
    const category = await fetcher.post("/categories", data);
    return category.data;
  } catch (error) {
    console.log({ error: error });
    return { error: error };
  }
}

export async function getManyCategories(query = "") {
  try {
    const res = await fetcher.get(`/categories?category=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneCategory(id) {
  const res = await fetcher.get(`/categories/${id}`);
  return res.data;
}

export async function updatecategorie(id, data) {
  const res = await fetcher.put(`/categories/${id}`, data);
  return res.data;
}

export async function deletecategorie(id) {
  const res = await fetcher.get(`/categories/${id}`);
  return res.data;
}
