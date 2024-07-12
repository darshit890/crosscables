import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AboutUs />
      <ProductList />
      <Contact />
    </>
  );
}
