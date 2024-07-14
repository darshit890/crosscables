import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  images: string;
  name: string;
  smallDescription: string;
  id: string;
}

export function ProductCard({
  images,
  id,
  smallDescription,
  name,
}: iAppProps) {
  return (
    <div className="rounded-lg border p-5 shadow-md">
      <div className="relative h-[230px]">
        <Image
          alt="Product image"
          src={images}
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl">{name}</h1>
      </div>

      <p className="text-gray-600 line-clamp-2 text-sm mt-2">
        {smallDescription}
      </p>

      <Button asChild className="w-full mt-5">
        <Link href={`/products/${id}`}>View Product</Link>
      </Button>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[230px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="w-full h-6" />
      </div>

      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
}
