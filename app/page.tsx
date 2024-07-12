import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ProductList />
      <Contact />
    </>
  );
}
