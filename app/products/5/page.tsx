import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
    <PageHero title="Front Brake Cable" />
      <section className="mx-auto px-4 lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div className="lg:col-span-3 mb-6 lg:mb-0">
          <Image
            src="/Product5.jpg"
            alt="yoo"
            height={200}
            width={400}
            className="object-cover h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-lg"
          />
        </div>
        <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4">
          <p className="mb-4 text-base sm:text-lg mt-4 lg:mt-10">
            Essential for reliable stopping power. This high-quality front brake
            cable ensures smooth and responsive braking for your bicycle. Made
            from durable stainless steel with a protective outer casing, it
            resists corrosion and withstands frequent use. Compatible with most
            brake systems, this cable is easy to install and provides consistent
            performance in all weather conditions.
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Key features:</h3>
          <ul className="space-y-1 list-disc list-inside text-sm sm:text-base">
            <li>Stainless steel construction</li>
            <li>Weather-resistant outer casing</li>
            <li>Universal fit for most brake systems</li>
            <li>Smooth operation for precise control</li>
            <li>Durable and long-lasting</li>
          </ul>
          <Link href={"/priceList"}>
            <button className="mt-5 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-6 sm:px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear text-sm sm:text-base w-full sm:w-auto">
              Our Price List
            </button>
          </Link>
        </div>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col my-[3rem] sm:my-[5rem] px-4 sm:px-5">
        <div className="flex flex-row items-center gap-x-5">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Related
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 sm:gap-10">
          <ProductCard
            images="/Product1.jpg"
            name="Accelarator Cable"
            smallDescription="Links the gas pedal to the throttle body, controlling fuel input and engine speed in response to driver input."
            id="1"
          />
          <ProductCard
            images="/Product2.jpg"
            name="Clutch Cable"
            smallDescription="Connects the clutch pedal to the clutch fork, enabling smooth engagement and disengagement of the clutch in manual transmission vehicles."
            id="2"
          />
          <ProductCard
            images="/Product3.jpg"
            name="Speedometer Cable"
            smallDescription="Transmits vehicle speed from the transmission to the speedometer for accurate speed readings."
            id="3"
          />
        </div>
      </div>
    </>
  );
}