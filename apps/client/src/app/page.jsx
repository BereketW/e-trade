import Header from "../components/global/Header";
import Welcome from "../components/global/Welcome";
import Categories from "../components/global/Categories";
// import CarouselEffect from "../components/global/Carousel";
// import { CarouselPlugin } from "../components/global/Carousel";
// import Carousel from "../components/global/Carousel";
import Subscribe from "../components/global/Subscribe";
import Message from "../components/global/Message";
import Footer from "../components/global/Footer";
import Flashsales from "../components/global/Flashsales";
import Feedback from "../components/global/Feedback";
import { getManyProducts } from "../data/products";
import { getManyCategories } from "../data/categories";
// import useQuery from "../components/hooks/useQuery";
export default async function Page({ children }) {
  const categories = await getManyCategories();
  const { products, totalPages } = await getManyProducts();
  console.log(products);

  // console.log(data);
  return (
    <main className="w-full">
      {/* <div className=" m-auto"> */}
      {/* <CarouselEffect /> */}

      <Welcome />
      <Flashsales products={products} />
      <Categories categories={categories} />
      <Feedback />
      <Subscribe />
      <Message />

      {/* </div> */}
    </main>
  );
}
