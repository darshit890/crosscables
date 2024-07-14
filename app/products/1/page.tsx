
import { Button } from "@/components/ui/button";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ">
                <Image
                  src="https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024"
                  alt="yoo"
                  height={200}
                  width={400}
                  className="object-cover h-[450px] w-full rounded-lg col-span-3"
                />
        <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Analog-Watch
          </h1>

          <p className="mt-2 text-muted-foreground">
            Introducing our timeless Analog Watch, the epitome of classic
            elegance. Crafted with precision and style, this watch seamlessly
            blends sophistication with functionality. Its sleek design features
            a durable stainless steel case and a genuine leather strap for
            lasting comfort.
          </p>
          {/* <form action={BuyProduct}>
          <input type="hidden" name="id" value={data?.id} />
          <BuyButton price={data?.price as number} />
        </form> */}
          <Button size="lg" className="w-full mt-10">
            Buy for $86
          </Button>
          <Button size="lg" variant='outline' className="w-full mt-5">
            Add to Cart
          </Button>

          <div className="border-t border-gray-200 mt-10 pt-10">
            <div className="grid grid-cols-2 w-full gap-y-3">
              <h3 className="text-sm font-medium text-muted-foreground col-span-1">
                Released:
              </h3>
              <h3 className="text-sm font-medium col-span-1">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "long",
                }).format()}
              </h3>

              <h3 className="text-sm font-medium text-muted-foreground col-span-1">
                Category:
              </h3>

              <h3 className="text-sm font-medium col-span-1">
                Recemntly added
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col my-[5rem] px-5">
        <div className="flex flex-row items-center gap-x-5">
          <h1 className="md:text-4xl sm:text-xl text-md font-semibold">
            Related
          </h1>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
          <ProductCard
            images={
              "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024"}
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
          <ProductCard
            images={
              "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024"}
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
          <ProductCard
            images={
              "https://framerusercontent.com/images/EFxcYveZp0Wwusii7P0jbzhTw.jpg?scale-down-to=1024"}
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
        </div>
      </div>
    </>
  );
}
