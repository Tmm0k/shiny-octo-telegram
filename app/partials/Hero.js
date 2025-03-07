'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative">
            {/* Mobile */}
            <section className="md:hidden w-full bg-gradient-to-b from-[#FDBE4F] from-0% via-[#FDBE4F] via-90% to-white to-100% py-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="sm:pl-10">
                        <h3 className="text-center text-xl leading-tight mb-4 text-black font-[family-name:var(--font-geologica)] font-semibold">
                            Support Your Dog's Anal Gland Health with Filaquin™
                        </h3>
                        <p className="text-center text-base leading-normal mb-4 text-black font-[family-name:var(--font-roboto-condensed)] font-light">
                            Filaquin™ features NMXFBR4™, our proprietary blend of yeast extract (beta-glucan), apple fiber, yeast culture (postbiotic), and psyllium husk fiber. This combination offers both insoluble and soluble fibers along with prebiotics and postbiotics. Fiber helps support normal stool consistency while prebiotics and postbiotics help support digestive health.
                        </p>
                        <div className="mb-5">
                            <span className="text-center text-lg leading-tight text-black block font-[family-name:var(--font-roboto-condensed)] font-bold">
                                Available Exclusively From Your Veterinarian
                            </span>
                        </div>
                    </div>
                    <div className="relative h-[340px] sm:h-[380px]">
                        <div className="absolute right-[50%] sm:right-[45%] top-[120px] sm:top-[40px] w-[45%] sm:w-[35%]">
                            <Image
                                src="/filaquin-product-pouch-hero.webp"
                                alt="Filaquin Product Pouch"
                                width={300}
                                height={600}
                                className="object-contain w-full"
                                priority
                            />
                        </div>
                        <div className="absolute right-0 -top-20 sm:-right-12 sm:top-[20px] w-[75%] sm:w-[55%]">
                            <Image
                                src="/dogb-x-mb.webp"
                                alt="Hero Dog"
                                width={500}
                                height={450}
                                className="object-contain w-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop */}
            <section className="hidden md:block w-full bg-[#FDBE4F] py-10">
                <div className="max-w-[1280px] mx-auto px-8">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-5 pr-8">
                            <h3 className="text-[21px] leading-tight mb-3 text-black font-[family-name:var(--font-geologica)] font-semibold">
                                Support Your Dog's Anal Gland Health with Filaquin™
                            </h3>
                            <p className="text-[14px] leading-snug mb-2 text-black font-[family-name:var(--font-roboto-condensed)] font-light">
                                Filaquin™ features NMXFBR4™, our proprietary blend of yeast extract (beta-glucan), apple fiber, yeast culture (postbiotic), and psyllium husk fiber. This combination offers both insoluble and soluble fibers along with prebiotics and postbiotics. Fiber helps support normal stool consistency while prebiotics and postbiotics help support digestive health.
                            </p>
                            <span className="text-[14px] leading-none text-black block font-[family-name:var(--font-roboto-condensed)] font-bold">
                                Available Exclusively From Your Veterinarian
                            </span>
                        </div>
                        <div className="col-span-3 flex justify-center">
                            <div className="w-[60%] -mt-8">
                                <Image
                                    src="/filaquin-product-pouch-hero.webp"
                                    alt="Filaquin Product Pouch"
                                    width={300}
                                    height={600}
                                    className="object-contain w-full"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="col-span-4 absolute right-0 flex items-center justify-end">
                            <div className="w-full">
                                <Image
                                    src="/dog-x-dt.webp"
                                    alt="Hero Dog"
                                    width={800}
                                    height={600}
                                    className="object-contain w-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-16 sm:h-24 bg-white w-full" />
        </div>
    );
}
