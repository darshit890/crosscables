import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ">
                <Image
                  src="/Product4.jpg"
                  alt="yoo"
                  height={200}
                  width={400}
                  className="object-cover h-[450px] w-full rounded-lg col-span-3"
                />
        <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Rear Brake Cable
          </h1>

          <p className="mb-4 text-lg leading-relaxed mt-10">
            Essential for optimal braking performance, our high-quality rear brake cable ensures
            responsive and reliable stopping power. Designed for durability and smooth operation,
            this cable is compatible with most bicycle models.
          </p>

          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="space-y-1 list-disc list-inside mb-4">
            <li>Stainless steel construction for corrosion resistance</li>
            <li>Teflon-coated inner wire for reduced friction</li>
            <li>Universal fit for most brake systems</li>
            <li>Includes end caps for clean installation</li>
          </ul>

          <p className="text-lg italic">
            Upgrade your bike's safety and performance with this precision-engineered rear brake
            cable.
          </p>
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
              images="/Product5.jpg"
              name="Front Brake Cable"
              smallDescription="Critical linkage that connects the brake lever to the front brake assembly, providing precise control and efficient braking performance."
              id="5"
            />
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
        </div>
      </div>
    </>
  );
}
